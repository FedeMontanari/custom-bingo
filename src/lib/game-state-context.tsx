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

interface GameStateContextType {
  game: BingoGame;
  userName: string;
  isOrganizer: boolean;
  markedItems: Set<number>;
  toggleMarked: (index: number) => void;
  hasWon: boolean;
  winningPlayer: string | null;
  isGameActive: boolean;
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
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  // Subscribe to win events
  useEffect(() => {
    const channel = realtimeClient
      .channel("game-" + game.code)
      .on("broadcast", { event: "player-won" }, ({ payload }) => {
        if (payload.playerName !== userName) {
          setWinningPlayer(payload.playerName);
        }
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
        game,
        userName,
        isOrganizer,
        markedItems,
        toggleMarked,
        hasWon,
        winningPlayer,
        isGameActive: game.isActive,
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
