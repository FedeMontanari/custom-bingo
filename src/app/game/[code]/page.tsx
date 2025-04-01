"use client";

import { WiredCard } from "wired-elements-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { api } from "@/trpc/react";
import { useParams, useRouter } from "next/navigation";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";

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
import { Loader2 } from "lucide-react";

export default function GamePage() {
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [userName, setUserName] = useState(
    sessionStorage.getItem("userName") ?? ""
  );
  const [markedItems, setMarkedItems] = useState<Set<number>>(new Set());

  const router = useRouter();
  const params = useParams();

  const game = api.game.getByCode.useQuery({ code: params.code as string });

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    if (!userName) {
      setIsUsernameOpen(true);
    }
  }, [userName]);

  function toggleMarked(index: number) {
    setMarkedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }

  if (game.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin" />
        Loading...
      </div>
    );
  }

  if (game.isError) {
    return <div>Error loading game</div>;
  }

  if (!game.data) {
    return <div>Game not found</div>;
  }

  const content = game.data.content as string[];

  return (
    <>
      <MaxWidthWrapper className="my-20 space-y-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold underline">{game.data.title}</h1>
          <div className="flex gap-2 w-full justify-evenly">
            <p className="text-sm text-muted-foreground">
              You: <span className="font-bold">{userName}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Organizer:{" "}
              <span className="font-bold">{game.data.organizer}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Players:{" "}
              <span className="font-bold">{game.data.players.length}</span>
            </p>
          </div>
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${game.data.cols}, minmax(0, 1fr))`,
            }}
          >
            {content.map((content, index) => {
              return (
                <WiredCard
                  key={content}
                  onClick={() => toggleMarked(index)}
                  className="cursor-pointer min-h-20 flex items-center justify-center"
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
                  setUserName(e.target.value);
                }}
                id="name"
                type="text"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => router.push("/")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                sessionStorage.setItem("userName", userName);
                router.refresh();
              }}
              disabled={!userName}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
