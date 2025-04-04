"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/trpc/react";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [gameCode, setGameCode] = useState("");
  const [error, setError] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const { mutate: checkGame, isPending: isChecking } =
    api.game.checkGameActiveMutation.useMutation({
      onSuccess: (game) => {
        if (!game) {
          setError("Game not found");
          setIsRedirecting(false);
        } else if (!game.isActive) {
          setError("This game has ended");
          setIsRedirecting(false);
        } else {
          // Game is valid and active, show redirecting state
          setIsRedirecting(true);
          // Short delay to show the redirecting state
          setTimeout(() => {
            router.push(`/game/${gameCode}`);
          }, 500);
        }
      },
      onError: () => {
        setError("Game not found");
        setIsRedirecting(false);
      },
    });

  const handleJoin = () => {
    if (!gameCode) {
      setError("Please enter a game code");
      return;
    }

    setError("");
    checkGame({ code: gameCode });
  };

  return (
    <MaxWidthWrapper className="my-20 space-y-32">
      <div className="flex items-center gap-14 max-lg:flex-col">
        <div className="relative">
          <Image
            src="/img/lycee.jpg"
            alt="Hero"
            width={500}
            height={500}
            className="border-8 border-blue-400"
          />
          <div className="absolute inset-[3px] border-2 border-border"></div>
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h4 className="underline max-lg:text-center">Custom Bingo Online</h4>
          <h1 className="text-4xl font-bold max-lg:text-center">
            Play Custom Bingo
            <br />
            <span className="text-blue-500">Join</span> or{" "}
            <span className="text-blue-500">Create</span> a game.
          </h1>
          <h3 className="max-lg:text-center">
            Play Custom Bingo <span className="text-blue-500">Join</span> or{" "}
            <span className="text-blue-500">Create</span> a game.
          </h3>
          <Tabs defaultValue="join">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                className={cn(`data-[state=active]:bg-blue-100`)}
                value="join"
              >
                Join
              </TabsTrigger>
              <TabsTrigger
                className={cn(`data-[state=active]:bg-blue-100`)}
                value="create"
              >
                Create
              </TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <Card className="bg-blue-100">
                <CardHeader>
                  <CardTitle>Create a custom Bingo card</CardTitle>
                  <CardDescription>
                    Fill each cell with a word or phrase.
                    <br />
                    You can use emojis too 😎
                    <br />
                    Once you&apos;re done, copy the code of your card and share
                    it around!
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Button asChild variant="neutral">
                    <Link href="/new-game">Create</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="join">
              <Card className="bg-blue-100">
                <CardHeader>
                  <CardTitle>Join a custom Bingo card</CardTitle>
                  <CardDescription>
                    Enter the code of the card you want to join.
                    <br />
                    If you don&apos;t have the code, ask the creator to send it
                    to you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <Input
                        placeholder="Enter a code"
                        value={gameCode}
                        onChange={(e) => setGameCode(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                        disabled={isRedirecting}
                      />
                      <Button
                        variant="neutral"
                        onClick={handleJoin}
                        disabled={isChecking || isRedirecting}
                      >
                        {isChecking
                          ? "Checking..."
                          : isRedirecting
                          ? "Redirecting..."
                          : "Join"}
                      </Button>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {isRedirecting && (
                      <div className="flex items-center justify-center gap-2 text-blue-500">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <p>Redirecting to game...</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
