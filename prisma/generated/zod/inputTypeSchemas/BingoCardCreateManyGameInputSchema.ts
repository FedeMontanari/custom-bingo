import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BingoCardCreateManyGameInputSchema: z.ZodType<Prisma.BingoCardCreateManyGameInput> = z.object({
  id: z.string().cuid().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BingoCardCreateManyGameInputSchema;
