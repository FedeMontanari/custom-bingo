import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardIncludeSchema } from '../inputTypeSchemas/BingoCardIncludeSchema'
import { BingoCardWhereUniqueInputSchema } from '../inputTypeSchemas/BingoCardWhereUniqueInputSchema'
import { CardStateFindManyArgsSchema } from "../outputTypeSchemas/CardStateFindManyArgsSchema"
import { BingoGameArgsSchema } from "../outputTypeSchemas/BingoGameArgsSchema"
import { BingoCardCountOutputTypeArgsSchema } from "../outputTypeSchemas/BingoCardCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BingoCardSelectSchema: z.ZodType<Prisma.BingoCardSelect> = z.object({
  id: z.boolean().optional(),
  gameId: z.boolean().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.boolean().optional(),
  wonAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  cardState: z.union([z.boolean(),z.lazy(() => CardStateFindManyArgsSchema)]).optional(),
  game: z.union([z.boolean(),z.lazy(() => BingoGameArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BingoCardCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BingoCardDeleteArgsSchema: z.ZodType<Prisma.BingoCardDeleteArgs> = z.object({
  select: BingoCardSelectSchema.optional(),
  include: z.lazy(() => BingoCardIncludeSchema).optional(),
  where: BingoCardWhereUniqueInputSchema,
}).strict() ;

export default BingoCardDeleteArgsSchema;
