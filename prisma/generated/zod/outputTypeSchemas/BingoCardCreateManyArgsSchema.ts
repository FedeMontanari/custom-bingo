import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardCreateManyInputSchema } from '../inputTypeSchemas/BingoCardCreateManyInputSchema'

export const BingoCardCreateManyArgsSchema: z.ZodType<Prisma.BingoCardCreateManyArgs> = z.object({
  data: z.union([ BingoCardCreateManyInputSchema,BingoCardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BingoCardCreateManyArgsSchema;
