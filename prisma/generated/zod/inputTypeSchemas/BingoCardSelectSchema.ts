import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameArgsSchema } from "../outputTypeSchemas/BingoGameArgsSchema"

export const BingoCardSelectSchema: z.ZodType<Prisma.BingoCardSelect> = z.object({
  id: z.boolean().optional(),
  gameId: z.boolean().optional(),
  cardState: z.boolean().optional(),
  hasWon: z.boolean().optional(),
  wonAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  game: z.union([z.boolean(),z.lazy(() => BingoGameArgsSchema)]).optional(),
}).strict()

export default BingoCardSelectSchema;
