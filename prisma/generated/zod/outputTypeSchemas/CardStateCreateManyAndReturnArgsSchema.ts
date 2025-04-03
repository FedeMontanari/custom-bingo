import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateCreateManyInputSchema } from '../inputTypeSchemas/CardStateCreateManyInputSchema'

export const CardStateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CardStateCreateManyAndReturnArgs> = z.object({
  data: z.union([ CardStateCreateManyInputSchema,CardStateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CardStateCreateManyAndReturnArgsSchema;
