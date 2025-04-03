import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateIncludeSchema } from '../inputTypeSchemas/CardStateIncludeSchema'
import { CardStateCreateInputSchema } from '../inputTypeSchemas/CardStateCreateInputSchema'
import { CardStateUncheckedCreateInputSchema } from '../inputTypeSchemas/CardStateUncheckedCreateInputSchema'
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

export const CardStateCreateArgsSchema: z.ZodType<Prisma.CardStateCreateArgs> = z.object({
  select: CardStateSelectSchema.optional(),
  include: z.lazy(() => CardStateIncludeSchema).optional(),
  data: z.union([ CardStateCreateInputSchema,CardStateUncheckedCreateInputSchema ]),
}).strict() ;

export default CardStateCreateArgsSchema;
