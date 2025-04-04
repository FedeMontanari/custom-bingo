"use client";

import { createContext, useContext, useState, useRef, ReactNode, useEffect } from "react";
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

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

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
      .channel('game-' + game.code)
      .on('broadcast', { event: 'player-won' }, ({ payload }) => {
        if (payload.playerName !== userName) {
          setWinningPlayer(payload.playerName);
        }
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [game.code, userName]);

  const checkWinCondition = (marks: Set<number>) => {
    // If we've already won or game is inactive, don't check
    if (hasWonRef.current || !game.isActive) return false;

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
        won = true;
      }
    }

    return won;
  };

  const toggleMarked = (index: number) => {
    // Don't allow marking if game is inactive
    if (!game.isActive) return;

    setMarkedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
        return newSet;
      } else {
        newSet.add(index);
        // Only check win condition when adding a mark
        const won = checkWinCondition(newSet);
        if (won && !hasWonRef.current) {
          hasWonRef.current = true;
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