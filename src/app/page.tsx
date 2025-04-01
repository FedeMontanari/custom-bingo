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

export default function Home() {
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
          <h4 className="underline max-lg:text-center">
            Welcome to Custom Bingo Online
          </h4>
          <h1 className="text-4xl font-bold max-lg:text-center">
            Play Custom Bingo
            <br />
            <span className="text-blue-500">Create</span> or{" "}
            <span className="text-blue-500">Join</span> a game.
          </h1>
          <h3 className="max-lg:text-center">
            Play Custom Bingo <span className="text-blue-500">Create</span> or{" "}
            <span className="text-blue-500">Join</span> a game.
          </h3>
          <Tabs defaultValue="create">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                className={cn(`data-[state=active]:bg-blue-100`)}
                value="create"
              >
                Create
              </TabsTrigger>
              <TabsTrigger
                className={cn(`data-[state=active]:bg-blue-100`)}
                value="join"
              >
                Join
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
                    Once you're done, copy the code of your card and share it
                    around!
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
                    If you don't have the code, ask the creator to send it to
                    you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Input placeholder="Enter a code" />
                    <Button variant="neutral">Join</Button>
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
