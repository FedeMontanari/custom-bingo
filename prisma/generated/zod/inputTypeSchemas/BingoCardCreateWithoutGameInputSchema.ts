import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateCreateNestedManyWithoutCardInputSchema } from './CardStateCreateNestedManyWithoutCardInputSchema';

export const BingoCardCreateWithoutGameInputSchema: z.ZodType<Prisma.BingoCardCreateWithoutGameInput> = z.object({
  id: z.string().cuid().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cardState: z.lazy(() => CardStateCreateNestedManyWithoutCardInputSchema).optional()
}).strict();

export default BingoCardCreateWithoutGameInputSchema;
