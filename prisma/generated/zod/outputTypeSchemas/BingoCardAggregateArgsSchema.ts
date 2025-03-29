import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'
import { BingoCardOrderByWithRelationInputSchema } from '../inputTypeSchemas/BingoCardOrderByWithRelationInputSchema'
import { BingoCardWhereUniqueInputSchema } from '../inputTypeSchemas/BingoCardWhereUniqueInputSchema'

export const BingoCardAggregateArgsSchema: z.ZodType<Prisma.BingoCardAggregateArgs> = z.object({
  where: BingoCardWhereInputSchema.optional(),
  orderBy: z.union([ BingoCardOrderByWithRelationInputSchema.array(),BingoCardOrderByWithRelationInputSchema ]).optional(),
  cursor: BingoCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BingoCardAggregateArgsSchema;
