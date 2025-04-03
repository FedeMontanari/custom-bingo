import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'
import { CardStateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CardStateOrderByWithAggregationInputSchema'
import { CardStateScalarFieldEnumSchema } from '../inputTypeSchemas/CardStateScalarFieldEnumSchema'
import { CardStateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CardStateScalarWhereWithAggregatesInputSchema'

export const CardStateGroupByArgsSchema: z.ZodType<Prisma.CardStateGroupByArgs> = z.object({
  where: CardStateWhereInputSchema.optional(),
  orderBy: z.union([ CardStateOrderByWithAggregationInputSchema.array(),CardStateOrderByWithAggregationInputSchema ]).optional(),
  by: CardStateScalarFieldEnumSchema.array(),
  having: CardStateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CardStateGroupByArgsSchema;
