import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'

export const CardStateDeleteManyArgsSchema: z.ZodType<Prisma.CardStateDeleteManyArgs> = z.object({
  where: CardStateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CardStateDeleteManyArgsSchema;
