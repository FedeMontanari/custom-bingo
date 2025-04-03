import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameCreateNestedOneWithoutBingoCardInputSchema } from './BingoGameCreateNestedOneWithoutBingoCardInputSchema';

export const BingoCardCreateWithoutCardStateInputSchema: z.ZodType<Prisma.BingoCardCreateWithoutCardStateInput> = z.object({
  id: z.string().cuid().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  game: z.lazy(() => BingoGameCreateNestedOneWithoutBingoCardInputSchema)
}).strict();

export default BingoCardCreateWithoutCardStateInputSchema;
