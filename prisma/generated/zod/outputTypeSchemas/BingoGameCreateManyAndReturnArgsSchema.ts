import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameCreateManyInputSchema } from '../inputTypeSchemas/BingoGameCreateManyInputSchema'

export const BingoGameCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BingoGameCreateManyAndReturnArgs> = z.object({
  data: z.union([ BingoGameCreateManyInputSchema,BingoGameCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BingoGameCreateManyAndReturnArgsSchema;
