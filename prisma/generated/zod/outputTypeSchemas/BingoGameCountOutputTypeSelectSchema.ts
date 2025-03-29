import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BingoGameCountOutputTypeSelectSchema: z.ZodType<Prisma.BingoGameCountOutputTypeSelect> = z.object({
  BingoCard: z.boolean().optional(),
}).strict();

export default BingoGameCountOutputTypeSelectSchema;
