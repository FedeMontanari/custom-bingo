"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  useEffect,
} from "react";
import { BingoGame } from "../../prisma/generated/prisma";
import { api } from "@/trpc/react";
import { realtimeClient } from "@/server/realtime";
import { useRouter } from "next/navigation";

interface GameStateContextType {
  game: BingoGame;
  userName: string;
  isOrganizer: boolean;
  markedItems: Set<number>;
  toggleMarked: (index: number) => void;
  hasWon: boolean;
  winningPlayer: string | null;
  isGameActive: boolean;
  resetGame: () => Promise<void>;
}

const GameStateContext = createContext<GameStateContextType | undefined>(
  undefined
);

export function GameStateProvider({
  children,
  game,
  userName,
  isOrganizer,
}: {
  children: ReactNode;
  game: BingoGame;
  userName: string;
  isOrganizer: boolean;
}) {
  const [markedItems, setMarkedItems] = useState<Set<number>>(new Set());
  const [hasWon, setHasWon] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState<string | null>(null);
  const hasWonRef = useRef(false);
  const [gameState, setGameState] = useState(game);
  const router = useRouter();

  // Query for the player's card
  const { data: card } = api.game.getCard.useQuery(
    { code: game.code as string, playerName: userName },
    { enabled: !!userName }
  );

  // Query for the winning card if game is inactive
  const { data: winningCard } = api.game.getWinningCard.useQuery(
    { code: game.code as string },
    { enabled: !game.isActive && !hasWon && !winningPlayer && !!game.code }
  );

  // Initialize win states
  useEffect(() => {
    if (card?.hasWon) {
      setHasWon(true);
      hasWonRef.current = true;
    }
  }, [card]);

  // Set winning player if found
  useEffect(() => {
    if (winningCard && winningCard.playerName !== userName && !winningPlayer) {
      setWinningPlayer(winningCard.playerName);
    }
  }, [winningCard, userName, winningPlayer]);

  const updateCardWinStatusMutation = api.game.updateCardWinStatus.useMutation({
    onSuccess: (data) => {
      if (data.hasWon) {
        setHasWon(true);
        // Also update game state to inactive immediately for the organizer
        setGameState(prev => ({
          ...prev,
          isActive: false
        }));
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const trpcUtils = api.useUtils();

  const resetGameMutation = api.game.resetGame.useMutation({
    onSuccess: (data) => {
      // Update local game state
      setGameState(data);
      // Reset local win state
      setHasWon(false);
      hasWonRef.current = false;
      setWinningPlayer(null);
      
      // Clear marked items with a small delay to ensure smooth transition
      setTimeout(() => {
        setMarkedItems(new Set());
      }, 50);
      
      // Invalidate queries to ensure fresh data
      trpcUtils.game.getCard.invalidate();
      trpcUtils.game.getWinningCard.invalidate();
      
      sendDebugInfo("game-reset-success", { 
        organizer: userName,
        gameCode: game.code
      });
      
      // Force a full page refresh after a short delay
      setTimeout(() => {
        router.refresh();
      }, 100);
    },
    onError: (error) => {
      console.error("Error resetting game:", error);
      sendDebugInfo("game-reset-error", { 
        error: error.message,
        organizer: userName
      });
    },
  });

  const resetGame = () => {
    if (!isOrganizer) {
      console.error("Only the organizer can reset the game");
      return Promise.reject(new Error("Only the organizer can reset the game"));
    }

    sendDebugInfo("game-reset-requested", { organizer: userName });
    
    return new Promise<void>((resolve, reject) => {
      resetGameMutation.mutate(
        {
          code: game.code as string,
          organizerName: userName,
        },
        {
          onSuccess: () => {
            resolve();
          },
          onError: (error) => {
            reject(error);
          },
        }
      );
    });
  };

  // Subscribe to win events and game reset events
  useEffect(() => {
    const channel = realtimeClient
      .channel("game-" + game.code)
      .on("broadcast", { event: "player-won" }, ({ payload }) => {
        if (payload.playerName !== userName) {
          setWinningPlayer(payload.playerName);
        }
        // Update game state to inactive for all players immediately
        setGameState(prev => ({
          ...prev,
          isActive: false
        }));
      })
      .on("broadcast", { event: "game-reset" }, ({ payload }) => {
        // Reset local win state
        setHasWon(false);
        hasWonRef.current = false;
        setWinningPlayer(null);
        
        // Clear marked items with a small delay to ensure smooth transition
        setTimeout(() => {
          setMarkedItems(new Set());
        }, 50);
        
        // Update game active state
        setGameState(prev => ({
          ...prev,
          isActive: true
        }));
        
        // Invalidate queries to ensure fresh data
        trpcUtils.game.getCard.invalidate();
        trpcUtils.game.getWinningCard.invalidate();
        
        sendDebugInfo("game-reset-received", { 
          player: userName,
          resetTimestamp: payload.timestamp,
          organizerName: payload.organizerName
        });
        
        // Force a full page refresh after a short delay
        setTimeout(() => {
          router.refresh();
        }, 100);
      })
      .on("broadcast", { event: "debug-info" }, ({ payload }) => {
        console.log(
          `[DEBUG from ${payload.player}]`,
          payload.message,
          payload.data
        );
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [game.code, userName]);

  // Send debug info to realtime channel
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendDebugInfo = (message: string, data: any) => {
    try {
      realtimeClient.channel("game-" + game.code).send({
        type: "broadcast",
        event: "debug-info",
        payload: {
          message,
          data,
          player: userName,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Failed to send debug info:", error);
    }
  };

  const checkWinCondition = (marks: Set<number>) => {
    // If we've already won or game is inactive, don't check
    if (hasWonRef.current || !game.isActive) return false;

    // Debug logging
    console.log(`Checking win condition for grid ${game.rows}x${game.cols}`);
    console.log(`Marked items (${marks.size}):`, Array.from(marks));
    sendDebugInfo("win-check-start", {
      grid: `${game.rows}x${game.cols}`,
      markedItems: Array.from(marks),
      markedCount: marks.size,
      totalCells: game.rows * game.cols,
    });

    // Win only when all cells are marked (full bingo)
    const totalCells = game.rows * game.cols;
    const won = marks.size === totalCells;
    
    sendDebugInfo("win-check-result", { 
      won, 
      markedCount: marks.size, 
      totalCells 
    });
    
    console.log(`Win condition result: ${won} (${marks.size}/${totalCells} cells marked)`);
    return won;
  };

  const toggleMarked = (index: number) => {
    // Don't allow marking if game is inactive
    if (!game.isActive) return;

    sendDebugInfo("toggle-mark", { index, action: "start" });

    setMarkedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
        sendDebugInfo("toggle-mark", {
          index,
          action: "removed",
          newCount: newSet.size,
        });
        return newSet;
      } else {
        newSet.add(index);
        sendDebugInfo("toggle-mark", {
          index,
          action: "added",
          newCount: newSet.size,
          allMarked: Array.from(newSet),
        });

        // Only check win condition when adding a mark
        const won = checkWinCondition(newSet);

        if (won && !hasWonRef.current) {
          hasWonRef.current = true;
          sendDebugInfo("win-detected", {
            markedItems: Array.from(newSet),
          });
          updateCardWinStatusMutation.mutate({
            code: game.code as string,
            playerName: userName,
            hasWon: true,
          });
        }
        return newSet;
      }
    });
  };

  return (
    <GameStateContext.Provider
      value={{
        game: gameState,
        userName,
        isOrganizer,
        markedItems,
        toggleMarked,
        hasWon,
        winningPlayer,
        isGameActive: gameState.isActive,
        resetGame,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
}
