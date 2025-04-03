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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";

export default function GameCardWrapper({
  game,
  userName: userNameProp,
  isOrganizer,
}: {
  game: BingoGame;
  userName: string;
  isOrganizer: boolean;
}) {
  const [markedItems, setMarkedItems] = useState<Set<number>>(new Set());
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [userName, setUserName] = useState(userNameProp);

  const router = useRouter();

  const createCardMutation = api.game.createCard.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

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
          <div
            className="grid gap-1"
            style={{
              gridTemplateColumns: `repeat(${game.cols}, minmax(0, 1fr))`,
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
                sessionStorage.setItem("userName", userName as string);
                createCardMutation.mutate({
                  code: game.code as string,
                  playerName: userName as string,
                });
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
