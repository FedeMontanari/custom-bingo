import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameWhereInputSchema } from '../inputTypeSchemas/BingoGameWhereInputSchema'
import { BingoGameOrderByWithRelationInputSchema } from '../inputTypeSchemas/BingoGameOrderByWithRelationInputSchema'
import { BingoGameWhereUniqueInputSchema } from '../inputTypeSchemas/BingoGameWhereUniqueInputSchema'

export const BingoGameAggregateArgsSchema: z.ZodType<Prisma.BingoGameAggregateArgs> = z.object({
  where: BingoGameWhereInputSchema.optional(),
  orderBy: z.union([ BingoGameOrderByWithRelationInputSchema.array(),BingoGameOrderByWithRelationInputSchema ]).optional(),
  cursor: BingoGameWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BingoGameAggregateArgsSchema;
