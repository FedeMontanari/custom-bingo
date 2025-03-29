import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import generateCode from "@/server/utils/generate-code";
import BingoGameSchema from "../../../../prisma/generated/zod/modelSchema/BingoGameSchema";

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
});
