import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BingoGameCreateplayersInputSchema } from './BingoGameCreateplayersInputSchema';
import { BingoCardUncheckedCreateNestedManyWithoutGameInputSchema } from './BingoCardUncheckedCreateNestedManyWithoutGameInputSchema';

export const BingoGameUncheckedCreateInputSchema: z.ZodType<Prisma.BingoGameUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  code: z.string(),
  title: z.string(),
  rows: z.number().int(),
  cols: z.number().int(),
  content: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  organizer: z.string(),
  players: z.union([ z.lazy(() => BingoGameCreateplayersInputSchema),z.string().array() ]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BingoCard: z.lazy(() => BingoCardUncheckedCreateNestedManyWithoutGameInputSchema).optional()
}).strict();

export default BingoGameUncheckedCreateInputSchema;
