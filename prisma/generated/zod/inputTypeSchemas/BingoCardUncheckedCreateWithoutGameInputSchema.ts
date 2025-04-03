import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateUncheckedCreateNestedManyWithoutCardInputSchema } from './CardStateUncheckedCreateNestedManyWithoutCardInputSchema';

export const BingoCardUncheckedCreateWithoutGameInputSchema: z.ZodType<Prisma.BingoCardUncheckedCreateWithoutGameInput> = z.object({
  id: z.string().cuid().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cardState: z.lazy(() => CardStateUncheckedCreateNestedManyWithoutCardInputSchema).optional()
}).strict();

export default BingoCardUncheckedCreateWithoutGameInputSchema;
