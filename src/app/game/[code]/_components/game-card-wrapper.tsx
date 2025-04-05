"use client";

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
import dynamic from "next/dynamic";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BingoGame } from "../../../../../prisma/generated/prisma";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { GameStateProvider, useGameState } from "@/lib/game-state-context";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React, { memo } from "react";
import { toast } from "@/hooks/use-toast";

// Dynamically import components with SSR disabled
const WiredCard = dynamic(
  () => import("wired-elements-react").then((mod) => mod.WiredCard),
  { ssr: false }
);

const RoughNotation = dynamic(
  () => import("react-rough-notation").then((mod) => mod.RoughNotation),
  { ssr: false }
);

// Bingo Cell component to handle loading states
const BingoCell = memo(function BingoCell({
  content,
  index,
  isMarked,
  isActive,
  onToggle,
  forceRenderKey,
  animationsEnabled = true,
}: {
  content: string;
  index: number;
  isMarked: boolean;
  isActive: boolean;
  onToggle: (index: number) => void;
  forceRenderKey: number;
  animationsEnabled?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [updateKey, setUpdateKey] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  const renderAttemptsRef = useRef(0);

  // Add detailed logging to capture errors and conditions causing fallback rendering
  useEffect(() => {
    console.log("BingoCell initialized with:", {
      content,
      index,
      isMarked,
      isActive,
      forceRenderKey,
      animationsEnabled,
    });

    if (hasError) {
      console.error("BingoCell encountered an error during initialization.");
    }

    if (useFallback) {
      console.warn("BingoCell is using fallback rendering.");
    }
  }, [
    content,
    index,
    isMarked,
    isActive,
    forceRenderKey,
    animationsEnabled,
    hasError,
    useFallback,
  ]);

  // Add logging to render attempts
  console.log("Render attempt:", renderAttemptsRef.current);

  // Check if we're on the client and reset attempts on component mount
  useEffect(() => {
    try {
      setIsClient(true);
      setIsLoading(false);
      renderAttemptsRef.current = 0;
    } catch (error) {
      setHasError(true);
      console.error("Error initializing BingoCell:", error);
    }
  }, []);

  // Ensure effect dependencies are correct
  useEffect(() => {
    const handleResize = () => {
      setUpdateKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    if (forceRenderKey) {
      renderAttemptsRef.current = 0;
      setUpdateKey((prev) => prev + 1);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [forceRenderKey]);

  // Special handling for RoughNotation animation
  const [localAnimationsEnabled, setLocalAnimationsEnabled] =
    useState(animationsEnabled);

  useEffect(() => {
    // Ensure animations are properly synced with parent component
    setLocalAnimationsEnabled(animationsEnabled);

    // If animations were disabled (during reset), re-enable them after a delay
    if (!animationsEnabled) {
      const timer = setTimeout(() => {
        setLocalAnimationsEnabled(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animationsEnabled, forceRenderKey]);

  // Switch to fallback if too many render attempts fail
  useEffect(() => {
    if (updateKey > 3 && !useFallback) {
      // After 3 update attempts, switch to fallback rendering
      setUseFallback(true);
    }
  }, [updateKey, useFallback]);

  // Handle click
  const handleClick = () => {
    if (isActive && !isLoading) {
      onToggle(index);
    }
  };

  // Fallback rendering - simple div instead of WiredCard
  const renderFallback = () => {
    return (
      <div
        onClick={handleClick}
        className={`min-h-20 flex items-center justify-center border-2 border-gray-400 rounded-md shadow-md ${
          isActive ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        } ${isMarked ? "bg-red-50 border-red-500" : ""}`}
      >
        <span
          className={`text-2xl font-bold ${isMarked ? "text-red-500" : ""}`}
        >
          {content}
        </span>
      </div>
    );
  };

  // Show a placeholder if loading, not on client, or if there was an error
  if (!isClient || isLoading || hasError) {
    return renderFallback();
  }

  // Use fallback if we've had rendering issues
  if (useFallback) {
    return renderFallback();
  }

  // Try to render the wired card with error boundary
  try {
    renderAttemptsRef.current += 1;

    // If we've tried to render too many times, switch to fallback
    if (renderAttemptsRef.current > 20) {
      setUseFallback(true);
      console.log("Too many render attempts, switching to fallback");
      return renderFallback();
    }

    return (
      <WiredCard
        key={`cell-${index}-${content}-${isActive}-${forceRenderKey}-${updateKey}`}
        onClick={handleClick}
        className={`min-h-20 flex items-center justify-center ${
          isActive ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        {/* @ts-expect-error WiredCard is not properly typed */}
        <RoughNotation
          key={`notation-${index}-${isMarked}-${forceRenderKey}-${updateKey}`}
          type="circle"
          color="red"
          padding={10}
          show={isMarked}
          animationDuration={800}
          animate={localAnimationsEnabled}
        >
          <span className="text-2xl font-bold">{content}</span>
        </RoughNotation>
      </WiredCard>
    );
  } catch (error) {
    // Fallback to simple div if WiredCard fails
    console.error("Error rendering WiredCard:", error);
    setHasError(true);
    return renderFallback();
  }
});

function GameCardContent() {
  const {
    game,
    userName,
    isOrganizer,
    markedItems,
    toggleMarked,
    hasWon,
    winningPlayer,
    isGameActive,
    resetGame,
  } = useGameState();

  const content = game.content as string[];
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [forceRenderKey, setForceRenderKey] = useState(Date.now());
  const prevGameActiveRef = useRef(isGameActive);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isResetting, setIsResetting] = useState(false);

  // Show a custom toast notification when the game transitions from inactive to active (reset happens)
  useEffect(() => {
    if (isGameActive && !prevGameActiveRef.current) {
      toast({
        title: "Game Reset",
        description: "Game has been reset! Ready to play again!",
      });

      // Temporarily disable animations while we reset
      setAnimationsEnabled(false);

      // Sequence of events to ensure proper reset rendering
      const sequence = async () => {
        window.dispatchEvent(new Event("resize"));
        await new Promise((resolve) => setTimeout(resolve, 100));
        setForceRenderKey(Date.now() + 1);
        await new Promise((resolve) => setTimeout(resolve, 200));
        window.dispatchEvent(new Event("resize"));
        await new Promise((resolve) => setTimeout(resolve, 300));
        setAnimationsEnabled(true);
      };

      sequence();
    }

    prevGameActiveRef.current = isGameActive;
  }, [isGameActive]);

  // Add effect to force redraw after a small delay when marked items change
  useEffect(() => {
    if (markedItems.size === 0 && isGameActive) {
      // This likely indicates a reset, force redraw after a delay
      const timer = setTimeout(() => {
        setForceRenderKey(Date.now());
        // Trigger a resize event to help components redraw
        window.dispatchEvent(new Event("resize"));
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [markedItems.size, isGameActive]);

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
              BINGO! You&apos;ve won!
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

          {/* Reset Game Button - Only visible to organizers when game is inactive */}
          {isOrganizer && !isGameActive && (
            <div className="flex justify-center my-4">
              <Button
                onClick={() => setResetDialogOpen(true)}
                className="flex items-center gap-2"
                disabled={isResetting}
              >
                <RefreshCw
                  className={`h-4 w-4 ${isResetting ? "animate-spin" : ""}`}
                />
                {isResetting ? "Resetting..." : "Reset Game"}
              </Button>
            </div>
          )}

          {/* Reset Game Confirmation Dialog */}
          <AlertDialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Game</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to reset the game? This will clear all
                  players&apos; marked items and allow the game to be played
                  again.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={async () => {
                    setIsResetting(true);
                    await resetGame();
                    setResetDialogOpen(false);
                    setIsResetting(false);
                  }}
                  disabled={isResetting}
                >
                  {isResetting ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                      Resetting...
                    </>
                  ) : (
                    "Reset Game"
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <div
            className={`grid gap-1 ${!isGameActive ? "opacity-50" : ""}`}
            style={{
              gridTemplateColumns: `repeat(${game.cols}, minmax(0, 1fr))`,
            }}
            key={`grid-${forceRenderKey}`}
          >
            {content.map((cellContent, index) => (
              <BingoCell
                key={`${index}-${cellContent}-${isGameActive}-${forceRenderKey}`}
                content={cellContent}
                index={index}
                isMarked={markedItems.has(index)}
                isActive={isGameActive}
                onToggle={toggleMarked}
                forceRenderKey={forceRenderKey}
                animationsEnabled={animationsEnabled}
              />
            ))}
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
    onSuccess: () => {
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
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split("=");
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const storedUserName = cookies["userName"];

      if (storedUserName === game.organizer) {
        // If the stored username matches the organizer, use that
        setUserName(storedUserName);
        setTempUserName(storedUserName);
      } else {
        // If no valid organizer cookie exists, redirect to home
        router.push("/");
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
    <GameStateProvider
      game={game}
      userName={userName}
      isOrganizer={isActuallyOrganizer}
    >
      <GameCardContent />
    </GameStateProvider>
  );
}
