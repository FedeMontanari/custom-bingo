import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateCreateNestedManyWithoutCardInputSchema } from './CardStateCreateNestedManyWithoutCardInputSchema';
import { BingoGameCreateNestedOneWithoutBingoCardInputSchema } from './BingoGameCreateNestedOneWithoutBingoCardInputSchema';

export const BingoCardCreateInputSchema: z.ZodType<Prisma.BingoCardCreateInput> = z.object({
  id: z.string().cuid().optional(),
  hasWon: z.boolean().optional(),
  playerName: z.string(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cardState: z.lazy(() => CardStateCreateNestedManyWithoutCardInputSchema).optional(),
  game: z.lazy(() => BingoGameCreateNestedOneWithoutBingoCardInputSchema)
}).strict();

export default BingoCardCreateInputSchema;
