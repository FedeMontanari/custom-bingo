import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateCreateManyInputSchema } from '../inputTypeSchemas/CardStateCreateManyInputSchema'

export const CardStateCreateManyArgsSchema: z.ZodType<Prisma.CardStateCreateManyArgs> = z.object({
  data: z.union([ CardStateCreateManyInputSchema,CardStateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CardStateCreateManyArgsSchema;
