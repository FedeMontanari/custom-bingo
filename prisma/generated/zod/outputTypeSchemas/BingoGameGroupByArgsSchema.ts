import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameWhereInputSchema } from '../inputTypeSchemas/BingoGameWhereInputSchema'
import { BingoGameOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BingoGameOrderByWithAggregationInputSchema'
import { BingoGameScalarFieldEnumSchema } from '../inputTypeSchemas/BingoGameScalarFieldEnumSchema'
import { BingoGameScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BingoGameScalarWhereWithAggregatesInputSchema'

export const BingoGameGroupByArgsSchema: z.ZodType<Prisma.BingoGameGroupByArgs> = z.object({
  where: BingoGameWhereInputSchema.optional(),
  orderBy: z.union([ BingoGameOrderByWithAggregationInputSchema.array(),BingoGameOrderByWithAggregationInputSchema ]).optional(),
  by: BingoGameScalarFieldEnumSchema.array(),
  having: BingoGameScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BingoGameGroupByArgsSchema;
