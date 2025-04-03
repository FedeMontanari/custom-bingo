/*
  Warnings:

  - You are about to drop the column `cardState` on the `BingoCard` table. All the data in the column will be lost.
  - Added the required column `playerName` to the `BingoCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BingoCard" DROP COLUMN "cardState",
ADD COLUMN     "playerName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CardState" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "marked" BOOLEAN NOT NULL DEFAULT false,
    "cardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardState_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardState" ADD CONSTRAINT "CardState_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "BingoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
