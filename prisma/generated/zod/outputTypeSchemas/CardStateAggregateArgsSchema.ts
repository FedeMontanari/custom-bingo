import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'
import { CardStateOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardStateOrderByWithRelationInputSchema'
import { CardStateWhereUniqueInputSchema } from '../inputTypeSchemas/CardStateWhereUniqueInputSchema'

export const CardStateAggregateArgsSchema: z.ZodType<Prisma.CardStateAggregateArgs> = z.object({
  where: CardStateWhereInputSchema.optional(),
  orderBy: z.union([ CardStateOrderByWithRelationInputSchema.array(),CardStateOrderByWithRelationInputSchema ]).optional(),
  cursor: CardStateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CardStateAggregateArgsSchema;
