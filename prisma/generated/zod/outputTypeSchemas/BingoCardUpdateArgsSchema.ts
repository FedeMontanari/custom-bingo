import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardIncludeSchema } from '../inputTypeSchemas/BingoCardIncludeSchema'
import { BingoCardUpdateInputSchema } from '../inputTypeSchemas/BingoCardUpdateInputSchema'
import { BingoCardUncheckedUpdateInputSchema } from '../inputTypeSchemas/BingoCardUncheckedUpdateInputSchema'
import { BingoCardWhereUniqueInputSchema } from '../inputTypeSchemas/BingoCardWhereUniqueInputSchema'
import { BingoGameArgsSchema } from "../outputTypeSchemas/BingoGameArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const BingoCardUpdateArgsSchema: z.ZodType<Prisma.BingoCardUpdateArgs> = z.object({
  select: BingoCardSelectSchema.optional(),
  include: z.lazy(() => BingoCardIncludeSchema).optional(),
  data: z.union([ BingoCardUpdateInputSchema,BingoCardUncheckedUpdateInputSchema ]),
  where: BingoCardWhereUniqueInputSchema,
}).strict() ;

export default BingoCardUpdateArgsSchema;
