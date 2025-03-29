import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardWhereInputSchema } from '../inputTypeSchemas/BingoCardWhereInputSchema'

export const BingoCardDeleteManyArgsSchema: z.ZodType<Prisma.BingoCardDeleteManyArgs> = z.object({
  where: BingoCardWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BingoCardDeleteManyArgsSchema;
