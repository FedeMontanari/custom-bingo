"use client";

import { RoughNotation } from "react-rough-notation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { WiredCard } from "wired-elements-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BingoGame } from "../../../../../prisma/generated/prisma";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { GameStateProvider, useGameState } from "@/lib/game-state-context";
import { useEffect, useState } from "react";

function GameCardContent() {
  const { game, userName, markedItems, toggleMarked, hasWon, winningPlayer, isGameActive } = useGameState();

  const content = game.content as string[];

  return (
    <>
      <MaxWidthWrapper className="my-20 space-y-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold underline">{game.title}</h1>
          <div className="flex gap-2 w-full justify-evenly">
            <p className="text-sm text-muted-foreground">
              You: <span className="font-bold">{userName}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Organizer: <span className="font-bold">{game.organizer}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Players: <span className="font-bold">{game.players.length}</span>
            </p>
          </div>
          {hasWon && (
            <div className="text-center text-2xl font-bold text-green-500">
              BINGO! You've won!
            </div>
          )}
          {winningPlayer && (
            <div className="text-center text-2xl font-bold text-yellow-500">
              {winningPlayer} has won the game!
            </div>
          )}
          {!isGameActive && !hasWon && !winningPlayer && (
            <div className="text-center text-2xl font-bold text-gray-500">
              This game has ended.
            </div>
          )}
          <div
            className={`grid gap-1 ${!isGameActive ? 'opacity-50' : ''}`}
            style={{
              gridTemplateColumns: `repeat(${game.cols}, minmax(0, 1fr))`,
            }}
          >
            {content.map((content, index) => {
              return (
                <WiredCard
                  key={content}
                  onClick={() => isGameActive && toggleMarked(index)}
                  className={`min-h-20 flex items-center justify-center ${
                    isGameActive ? 'cursor-pointer' : 'cursor-not-allowed'
                  }`}
                >
                  {/* @ts-expect-error WiredCard is not properly typed */}
                  <RoughNotation
                    type="circle"
                    color="red"
                    padding={10}
                    show={markedItems.has(index)}
                  >
                    <span className="text-2xl font-bold">{content}</span>
                  </RoughNotation>
                </WiredCard>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default function GameCardWrapper({
  game,
  userName: userNameProp,
  isOrganizer,
}: {
  game: BingoGame;
  userName: string;
  isOrganizer: boolean;
}) {
  const [isUsernameOpen, setIsUsernameOpen] = useState(!userNameProp);
  const [userName, setUserName] = useState(userNameProp);
  const [tempUserName, setTempUserName] = useState(userNameProp);
  const [hasCard, setHasCard] = useState(false);
  const router = useRouter();

  // Check if the user is actually the organizer by comparing with the game's organizer field
  const isActuallyOrganizer = userName === game.organizer;

  const { data: card, isLoading } = api.game.getCard.useQuery(
    { code: game.code as string, playerName: userName },
    { enabled: !!userName }
  );

  const createCardMutation = api.game.createCard.useMutation({
    onSuccess: (data) => {
      setHasCard(true);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  useEffect(() => {
    if (card) {
      setHasCard(true);
    }
  }, [card]);

  // If we have a username but it doesn't match the organizer when it should, reset to the correct state
  useEffect(() => {
    if (userName && isOrganizer && !isActuallyOrganizer) {
      // If we're supposed to be the organizer but we're not, we need to get the actual username from cookies
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const storedUserName = cookies['userName'];
      
      if (storedUserName === game.organizer) {
        // If the stored username matches the organizer, use that
        setUserName(storedUserName);
        setTempUserName(storedUserName);
      } else {
        // If no valid organizer cookie exists, redirect to home
        router.push('/');
      }
    }
  }, [userName, isOrganizer, isActuallyOrganizer, game.organizer, router]);

  // Create a card for the organizer if they don't have one
  useEffect(() => {
    if (isActuallyOrganizer && !isLoading && !card && userName) {
      createCardMutation.mutate({
        code: game.code as string,
        playerName: userName,
      });
    }
  }, [isActuallyOrganizer, isLoading, card, userName, game.code]);

  if (!userName || (!hasCard && !isLoading)) {
    return (
      <AlertDialog open={isUsernameOpen} onOpenChange={setIsUsernameOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Set your name</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter your name to continue.
              <Label className="sr-only" htmlFor="name">
                Name
              </Label>
              <Input
                onChange={(e) => {
                  setTempUserName(e.target.value);
                }}
                id="name"
                type="text"
                value={tempUserName}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => router.push("/")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                document.cookie = `userName=${tempUserName}; path=/`;
                setUserName(tempUserName);
                createCardMutation.mutate({
                  code: game.code as string,
                  playerName: tempUserName,
                });
                router.refresh();
              }}
              disabled={!tempUserName}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <GameStateProvider game={game} userName={userName} isOrganizer={isActuallyOrganizer}>
      <GameCardContent />
    </GameStateProvider>
  );
}
