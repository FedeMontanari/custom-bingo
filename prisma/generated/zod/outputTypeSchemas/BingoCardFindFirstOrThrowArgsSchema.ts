import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardIncludeSchema } from '../inputTypeSchemas/BingoCardIncludeSchema'
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'
import { BingoCardOrderByWithRelationInputSchema } from '../inputTypeSchemas/BingoCardOrderByWithRelationInputSchema'
import { BingoCardWhereUniqueInputSchema } from '../inputTypeSchemas/BingoCardWhereUniqueInputSchema'
import { BingoCardScalarFieldEnumSchema } from '../inputTypeSchemas/BingoCardScalarFieldEnumSchema'
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

export const BingoCardFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BingoCardFindFirstOrThrowArgs> = z.object({
  select: BingoCardSelectSchema.optional(),
  include: z.lazy(() => BingoCardIncludeSchema).optional(),
  where: BingoCardWhereInputSchema.optional(),
  orderBy: z.union([ BingoCardOrderByWithRelationInputSchema.array(),BingoCardOrderByWithRelationInputSchema ]).optional(),
  cursor: BingoCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BingoCardScalarFieldEnumSchema,BingoCardScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BingoCardFindFirstOrThrowArgsSchema;
