import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import generateCode from "@/server/utils/generate-code";
import BingoGameSchema from "../../../../prisma/generated/zod/modelSchema/BingoGameSchema";
import BingoCardSchema from "../../../../prisma/generated/zod/modelSchema/BingoCardSchema";
import { realtimeClient } from "@/server/realtime";

export const gameRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        rows: z.number(),
        cols: z.number(),
        content: z.array(z.string()),
        organizer: z.string(),
      })
    )
    .output(
      z.object({
        code: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { title, rows, cols, content, organizer } = input;

      const newGame = await ctx.db.bingoGame.create({
        data: {
          title,
          rows,
          cols,
          content,
          organizer,
          code: generateCode(),
          isActive: true,
        },
      });

      return { code: newGame.code };
    }),
  getByCode: publicProcedure
    .input(z.object({ code: z.string() }))
    .output(BingoGameSchema)
    .query(async ({ ctx, input }) => {
      const { code } = input;

      const game = await ctx.db.bingoGame.findUnique({ where: { code } });

      if (!game) {
        throw new Error("Game not found");
      }

      return game;
    }),
  createCard: publicProcedure
    .input(z.object({ code: z.string(), playerName: z.string() }))
    .output(BingoCardSchema)
    .mutation(async ({ ctx, input }) => {
      const { code, playerName } = input;

      const game = await ctx.db.bingoGame.findUnique({ where: { code } });

      if (!game) {
        throw new Error("Game not found");
      }

      // Add player to game's players array if not already there
      if (!game.players.includes(playerName)) {
        await ctx.db.bingoGame.update({
          where: { code },
          data: {
            players: {
              push: playerName,
            },
          },
        });

        // Broadcast the player join event to all clients
        await realtimeClient.channel("game-" + code).send({
          type: "broadcast",
          event: "player-joined",
          payload: { playerName },
        });
      }

      const card = await ctx.db.bingoCard.create({
        data: {
          gameId: game.id,
          playerName,
        },
      });

      return card;
    }),
  getCard: publicProcedure
    .input(z.object({ code: z.string(), playerName: z.string() }))
    .output(BingoCardSchema.nullable())
    .query(async ({ ctx, input }) => {
      const { code, playerName } = input;

      const game = await ctx.db.bingoGame.findUnique({ where: { code } });

      if (!game) {
        throw new Error("Game not found");
      }

      const card = await ctx.db.bingoCard.findFirst({
        where: {
          gameId: game.id,
          playerName,
        },
      });

      return card;
    }),
  updateCardWinStatus: publicProcedure
    .input(
      z.object({
        code: z.string(),
        playerName: z.string(),
        hasWon: z.boolean(),
      })
    )
    .output(BingoCardSchema)
    .mutation(async ({ ctx, input }) => {
      const game = await ctx.db.bingoGame.findUnique({
        where: { code: input.code },
      });

      if (!game) {
        throw new Error("Game not found");
      }

      const card = await ctx.db.bingoCard.update({
        where: {
          id: (
            await ctx.db.bingoCard.findFirst({
              where: {
                gameId: game.id,
                playerName: input.playerName,
              },
            })
          )?.id,
        },
        data: {
          hasWon: input.hasWon,
          wonAt: input.hasWon ? new Date() : null,
        },
      });

      // If someone won, set the game as inactive
      if (input.hasWon) {
        await ctx.db.bingoGame.update({
          where: { id: game.id },
          data: { isActive: false },
        });

        await realtimeClient.channel("game-" + input.code).send({
          type: "broadcast",
          event: "player-won",
          payload: { playerName: input.playerName },
        });
      }

      return card;
    }),
  getWinningCard: publicProcedure
    .input(z.object({ code: z.string() }))
    .output(BingoCardSchema.nullable())
    .query(async ({ ctx, input }) => {
      const game = await ctx.db.bingoGame.findUnique({
        where: { code: input.code },
      });

      if (!game) {
        throw new Error("Game not found");
      }

      const winningCard = await ctx.db.bingoCard.findFirst({
        where: {
          gameId: game.id,
          hasWon: true,
        },
      });

      return winningCard;
    }),
  checkGameActive: publicProcedure
    .input(z.object({ code: z.string() }))
    .output(BingoGameSchema.nullable())
    .query(async ({ ctx, input }) => {
      const game = await ctx.db.bingoGame.findUnique({
        where: { code: input.code },
      });

      return game;
    }),
  checkGameActiveMutation: publicProcedure
    .input(z.object({ code: z.string() }))
    .output(BingoGameSchema.nullable())
    .mutation(async ({ ctx, input }) => {
      const game = await ctx.db.bingoGame.findUnique({
        where: { code: input.code },
      });

      return game;
    }),
  resetGame: publicProcedure
    .input(
      z.object({
        code: z.string(),
        organizerName: z.string(),
      })
    )
    .output(BingoGameSchema)
    .mutation(async ({ ctx, input }) => {
      const { code, organizerName } = input;

      // Find the game
      const game = await ctx.db.bingoGame.findUnique({
        where: { code },
      });

      if (!game) {
        throw new Error("Game not found");
      }

      // Verify the requester is the organizer
      if (game.organizer !== organizerName) {
        throw new Error("Only the organizer can reset the game");
      }

      // Reset the game state
      const updatedGame = await ctx.db.bingoGame.update({
        where: { id: game.id },
        data: { isActive: true },
      });

      // Reset all player cards for this game
      await ctx.db.bingoCard.updateMany({
        where: { gameId: game.id },
        data: {
          hasWon: false,
          wonAt: null,
        },
      });

      // Notify all clients that the game has been reset
      await realtimeClient.channel("game-" + code).send({
        type: "broadcast",
        event: "game-reset",
        payload: {
          organizerName,
          timestamp: new Date().toISOString(),
        },
      });

      return updatedGame;
    }),
  leaveGame: publicProcedure
    .input(
      z.object({
        code: z.string(),
        playerName: z.string(),
      })
    )
    .output(BingoGameSchema)
    .mutation(async ({ ctx, input }) => {
      const { code, playerName } = input;

      // Find the game
      const game = await ctx.db.bingoGame.findUnique({
        where: { code },
      });

      if (!game) {
        throw new Error("Game not found");
      }

      // Remove player from game's players array
      const updatedGame = await ctx.db.bingoGame.update({
        where: { code },
        data: {
          players: {
            set: game.players.filter((p) => p !== playerName),
          },
        },
      });

      // Broadcast the player leave event to all clients
      await realtimeClient.channel("game-" + code).send({
        type: "broadcast",
        event: "player-left",
        payload: { playerName },
      });

      return updatedGame;
    }),
});
