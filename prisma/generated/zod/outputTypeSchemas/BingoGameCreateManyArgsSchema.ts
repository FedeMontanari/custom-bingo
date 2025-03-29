import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameCreateManyInputSchema } from '../inputTypeSchemas/BingoGameCreateManyInputSchema'

export const BingoGameCreateManyArgsSchema: z.ZodType<Prisma.BingoGameCreateManyArgs> = z.object({
  data: z.union([ BingoGameCreateManyInputSchema,BingoGameCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BingoGameCreateManyArgsSchema;
