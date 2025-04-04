import { api } from "@/trpc/server";
import { headers } from "next/headers";
import GameCardWrapper from "./_components/game-card-wrapper";

export default async function GamePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const headersList = await headers();
  const userName = headersList.get("x-user-name") ?? "";

  const game = await api.game.getByCode({ code });

  if (!game) {
    return (
      <div className="flex items-center justify-center h-screen">
        Game not found.
      </div>
    );
  }

  return (
    <GameCardWrapper
      game={game}
      userName={userName}
      isOrganizer={game.organizer === userName}
    />
  );
}
