import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BingoCardCreateManyInputSchema: z.ZodType<Prisma.BingoCardCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  gameId: z.string(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BingoCardCreateManyInputSchema;
