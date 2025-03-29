import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardUpdateManyMutationInputSchema } from '../inputTypeSchemas/BingoCardUpdateManyMutationInputSchema'
import { BingoCardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BingoCardUncheckedUpdateManyInputSchema'
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'

export const BingoCardUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BingoCardUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BingoCardUpdateManyMutationInputSchema,BingoCardUncheckedUpdateManyInputSchema ]),
  where: BingoCardWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BingoCardUpdateManyAndReturnArgsSchema;
