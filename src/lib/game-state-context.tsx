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

    // For small grids (3x3 or smaller), require a minimum percentage of cells to be marked
    // This prevents winning too easily on small grids
    const totalCells = game.rows * game.cols;
    if (game.rows === 2 && game.cols === 2) {
      // Specifically for 2x2 grids, require all 4 cells to be marked
      if (marks.size < 4) {
        console.log(
          `Not enough cells marked for 2x2 grid: ${marks.size}/4 required`
        );
        sendDebugInfo("win-check-2x2-fail", {
          markedCount: marks.size,
          requiredCount: 4,
        });
        return false;
      }
    } else if (totalCells <= 9) {
      // 3x3 or smaller grid (excluding 2x2)
      const minRequiredCells = Math.ceil(totalCells * 0.75); // Require at least 75% of cells
      if (marks.size < minRequiredCells) {
        console.log(
          `Not enough cells marked for small grid: ${marks.size}/${minRequiredCells} required`
        );
        sendDebugInfo("win-check-small-grid-fail", {
          markedCount: marks.size,
          requiredCount: minRequiredCells,
        });
        return false;
      }
    }

    let won = false;

    // Check rows
    for (let row = 0; row < game.rows; row++) {
      let rowComplete = true;
      for (let col = 0; col < game.cols; col++) {
        const index = row * game.cols + col;
        if (!marks.has(index)) {
          rowComplete = false;
          break;
        }
      }
      if (rowComplete) {
        console.log(`Row ${row} complete, winning!`);
        sendDebugInfo("win-check-row-complete", { row });
        won = true;
        break;
      }
    }

    // Check columns
    if (!won) {
      for (let col = 0; col < game.cols; col++) {
        let colComplete = true;
        for (let row = 0; row < game.rows; row++) {
          const index = row * game.cols + col;
          if (!marks.has(index)) {
            colComplete = false;
            break;
          }
        }
        if (colComplete) {
          console.log(`Column ${col} complete, winning!`);
          sendDebugInfo("win-check-col-complete", { col });
          won = true;
          break;
        }
      }
    }

    // Check diagonal (top-left to bottom-right)
    if (!won) {
      let diagonalComplete = true;
      for (let i = 0; i < Math.min(game.rows, game.cols); i++) {
        const index = i * game.cols + i;
        if (!marks.has(index)) {
          diagonalComplete = false;
          break;
        }
      }
      if (diagonalComplete) {
        console.log(`Diagonal (top-left to bottom-right) complete, winning!`);
        sendDebugInfo("win-check-diag1-complete", {});
        won = true;
      }
    }

    // Check diagonal (top-right to bottom-left)
    if (!won) {
      let diagonalComplete = true;
      for (let i = 0; i < Math.min(game.rows, game.cols); i++) {
        const index = i * game.cols + (game.cols - 1 - i);
        if (!marks.has(index)) {
          diagonalComplete = false;
          break;
        }
      }
      if (diagonalComplete) {
        console.log(`Diagonal (top-right to bottom-left) complete, winning!`);
        sendDebugInfo("win-check-diag2-complete", {});
        won = true;
      }
    }

    console.log(`Win condition result: ${won}`);
    sendDebugInfo("win-check-result", { won });
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
