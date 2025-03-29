import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameUpdateManyMutationInputSchema } from '../inputTypeSchemas/BingoGameUpdateManyMutationInputSchema'
import { BingoGameUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BingoGameUncheckedUpdateManyInputSchema'
import { BingoGameWhereInputSchema } from '../inputTypeSchemas/BingoGameWhereInputSchema'

export const BingoGameUpdateManyArgsSchema: z.ZodType<Prisma.BingoGameUpdateManyArgs> = z.object({
  data: z.union([ BingoGameUpdateManyMutationInputSchema,BingoGameUncheckedUpdateManyInputSchema ]),
  where: BingoGameWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BingoGameUpdateManyArgsSchema;
