import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardCreateManyInputSchema } from '../inputTypeSchemas/BingoCardCreateManyInputSchema'

export const BingoCardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BingoCardCreateManyAndReturnArgs> = z.object({
  data: z.union([ BingoCardCreateManyInputSchema,BingoCardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BingoCardCreateManyAndReturnArgsSchema;
