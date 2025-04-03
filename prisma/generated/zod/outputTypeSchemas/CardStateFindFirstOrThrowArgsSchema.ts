import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateIncludeSchema } from '../inputTypeSchemas/CardStateIncludeSchema'
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'
import { CardStateOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardStateOrderByWithRelationInputSchema'
import { CardStateWhereUniqueInputSchema } from '../inputTypeSchemas/CardStateWhereUniqueInputSchema'
import { CardStateScalarFieldEnumSchema } from '../inputTypeSchemas/CardStateScalarFieldEnumSchema'
import { BingoCardArgsSchema } from "../outputTypeSchemas/BingoCardArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardStateSelectSchema: z.ZodType<Prisma.CardStateSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  marked: z.boolean().optional(),
  cardId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => BingoCardArgsSchema)]).optional(),
}).strict()

export const CardStateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CardStateFindFirstOrThrowArgs> = z.object({
  select: CardStateSelectSchema.optional(),
  include: z.lazy(() => CardStateIncludeSchema).optional(),
  where: CardStateWhereInputSchema.optional(),
  orderBy: z.union([ CardStateOrderByWithRelationInputSchema.array(),CardStateOrderByWithRelationInputSchema ]).optional(),
  cursor: CardStateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CardStateScalarFieldEnumSchema,CardStateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CardStateFindFirstOrThrowArgsSchema;
