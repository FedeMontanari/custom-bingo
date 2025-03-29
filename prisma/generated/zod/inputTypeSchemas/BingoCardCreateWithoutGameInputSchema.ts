import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BingoCardCreateWithoutGameInputSchema: z.ZodType<Prisma.BingoCardCreateWithoutGameInput> = z.object({
  id: z.string().cuid().optional(),
  cardState: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  hasWon: z.boolean().optional(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BingoCardCreateWithoutGameInputSchema;
