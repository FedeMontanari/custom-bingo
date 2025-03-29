import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardIncludeSchema } from '../inputTypeSchemas/BingoCardIncludeSchema'
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'
import { BingoCardOrderByWithRelationInputSchema } from '../inputTypeSchemas/BingoCardOrderByWithRelationInputSchema'
import { BingoCardWhereUniqueInputSchema } from '../inputTypeSchemas/BingoCardWhereUniqueInputSchema'
import { BingoCardScalarFieldEnumSchema } from '../inputTypeSchemas/BingoCardScalarFieldEnumSchema'
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

export const BingoCardFindFirstArgsSchema: z.ZodType<Prisma.BingoCardFindFirstArgs> = z.object({
  select: BingoCardSelectSchema.optional(),
  include: z.lazy(() => BingoCardIncludeSchema).optional(),
  where: BingoCardWhereInputSchema.optional(),
  orderBy: z.union([ BingoCardOrderByWithRelationInputSchema.array(),BingoCardOrderByWithRelationInputSchema ]).optional(),
  cursor: BingoCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BingoCardScalarFieldEnumSchema,BingoCardScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BingoCardFindFirstArgsSchema;
