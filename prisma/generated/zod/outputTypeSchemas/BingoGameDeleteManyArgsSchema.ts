import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameWhereInputSchema } from '../inputTypeSchemas/BingoGameWhereInputSchema'

export const BingoGameDeleteManyArgsSchema: z.ZodType<Prisma.BingoGameDeleteManyArgs> = z.object({
  where: BingoGameWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BingoGameDeleteManyArgsSchema;
