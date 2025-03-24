import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import generateCode from "@/server/utils/generate-code";

export const gameRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        rows: z.number(),
        cols: z.number(),
        content: z.array(z.string()),
        user: z.object({
          isGuest: z.boolean(),
          id: z.string().optional(),
          name: z.string().optional(),
        }),
      })
    )
    .output(
      z.object({
        code: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user, title, rows, cols, content } = input;

      let userToConnect;

      if (user.isGuest) {
        const newUser = await ctx.db.user.create({
          data: {
            name: user.name ?? "Guest",
          },
        });

        userToConnect = newUser;
      } else {
        userToConnect = user;
      }

      const newGame = await ctx.db.bingoGame.create({
        data: {
          title,
          rows,
          cols,
          content,
          code: generateCode(),
          creator: {
            connect: {
              id: userToConnect.id,
            },
          },
        },
      });

      return { code: newGame.code };
    }),
});
