"use client";

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

export default function GamePage() {
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [userName, setUserName] = useState("");
  const [gameCode, setGameCode] = useState("");

  const router = useRouter();
  const params = useParams();

  const game = api.game.getByCode.useQuery({ code: params.code as string });

  if (game.isLoading) {
    return <div>Loading...</div>;
  }

  if (game.isError) {
    return <div>Error loading game</div>;
  }

  if (!game.data) {
    return <div>Game not found</div>;
  }

  const content = game.data.content as string[];

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

  return (
    <>
      <MaxWidthWrapper className="my-20 space-y-32">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{game.data.title}</h1>
          <p className="text-sm text-muted-foreground">
            Organizer: {game.data.organizer}
          </p>
          {content.map((content, index) => {
            return (
              <div
                key={content}
                onClick={() => toggleMarked(index)}
                className="cursor-pointer"
              >
                <RoughNotation
                  type="circle"
                  color="red"
                  padding={10}
                  show={markedItems.has(index)}
                >
                  {content}
                </RoughNotation>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>

      <AlertDialog open={isOrganizer} onOpenChange={setIsOrganizer}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Set your name</AlertDialogTitle>
            <AlertDialogDescription>
              Please enter your name to continue.
              <Label className="sr-only" htmlFor="name">
                Name
              </Label>
              <Input
                onChange={(e) =>
                  sessionStorage.setItem("userName", e.target.value)
                }
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
              onClick={() => router.refresh()}
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
