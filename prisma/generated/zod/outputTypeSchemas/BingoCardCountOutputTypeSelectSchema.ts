import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BingoCardCountOutputTypeSelectSchema: z.ZodType<Prisma.BingoCardCountOutputTypeSelect> = z.object({
  cardState: z.boolean().optional(),
}).strict();

export default BingoCardCountOutputTypeSelectSchema;
