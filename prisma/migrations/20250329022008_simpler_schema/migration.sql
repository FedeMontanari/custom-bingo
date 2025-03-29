/*
  Warnings:

  - You are about to drop the column `creatorId` on the `BingoGame` table. All the data in the column will be lost.
  - You are about to drop the `CalledItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerGame` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `organizer` to the `BingoGame` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BingoGame" DROP CONSTRAINT "BingoGame_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "CalledItem" DROP CONSTRAINT "CalledItem_gameId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerGame" DROP CONSTRAINT "PlayerGame_gameId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerGame" DROP CONSTRAINT "PlayerGame_userId_fkey";

-- AlterTable
ALTER TABLE "BingoGame" DROP COLUMN "creatorId",
ADD COLUMN     "organizer" TEXT NOT NULL,
ADD COLUMN     "players" TEXT[];

-- DropTable
DROP TABLE "CalledItem";

-- DropTable
DROP TABLE "PlayerGame";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "BingoCard" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "cardState" JSONB NOT NULL,
    "hasWon" BOOLEAN NOT NULL DEFAULT false,
    "wonAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BingoCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BingoCard" ADD CONSTRAINT "BingoCard_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "BingoGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
