import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameIncludeSchema } from '../inputTypeSchemas/BingoGameIncludeSchema'
import { BingoGameUpdateInputSchema } from '../inputTypeSchemas/BingoGameUpdateInputSchema'
import { BingoGameUncheckedUpdateInputSchema } from '../inputTypeSchemas/BingoGameUncheckedUpdateInputSchema'
import { BingoGameWhereUniqueInputSchema } from '../inputTypeSchemas/BingoGameWhereUniqueInputSchema'
import { BingoCardFindManyArgsSchema } from "../outputTypeSchemas/BingoCardFindManyArgsSchema"
import { BingoGameCountOutputTypeArgsSchema } from "../outputTypeSchemas/BingoGameCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BingoGameSelectSchema: z.ZodType<Prisma.BingoGameSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  title: z.boolean().optional(),
  rows: z.boolean().optional(),
  cols: z.boolean().optional(),
  content: z.boolean().optional(),
  organizer: z.boolean().optional(),
  players: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  BingoCard: z.union([z.boolean(),z.lazy(() => BingoCardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BingoGameCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BingoGameUpdateArgsSchema: z.ZodType<Prisma.BingoGameUpdateArgs> = z.object({
  select: BingoGameSelectSchema.optional(),
  include: z.lazy(() => BingoGameIncludeSchema).optional(),
  data: z.union([ BingoGameUpdateInputSchema,BingoGameUncheckedUpdateInputSchema ]),
  where: BingoGameWhereUniqueInputSchema,
}).strict() ;

export default BingoGameUpdateArgsSchema;
