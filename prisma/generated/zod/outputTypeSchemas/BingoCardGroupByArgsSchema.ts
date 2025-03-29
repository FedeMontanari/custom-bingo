import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'
import { BingoCardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BingoCardOrderByWithAggregationInputSchema'
import { BingoCardScalarFieldEnumSchema } from '../inputTypeSchemas/BingoCardScalarFieldEnumSchema'
import { BingoCardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BingoCardScalarWhereWithAggregatesInputSchema'

export const BingoCardGroupByArgsSchema: z.ZodType<Prisma.BingoCardGroupByArgs> = z.object({
  where: BingoCardWhereInputSchema.optional(),
  orderBy: z.union([ BingoCardOrderByWithAggregationInputSchema.array(),BingoCardOrderByWithAggregationInputSchema ]).optional(),
  by: BingoCardScalarFieldEnumSchema.array(),
  having: BingoCardScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BingoCardGroupByArgsSchema;
