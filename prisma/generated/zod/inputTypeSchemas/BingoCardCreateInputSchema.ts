import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BingoGameCreateNestedOneWithoutBingoCardInputSchema } from './BingoGameCreateNestedOneWithoutBingoCardInputSchema';

export const BingoCardCreateInputSchema: z.ZodType<Prisma.BingoCardCreateInput> = z.object({
  id: z.string().cuid().optional(),
  cardState: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  hasWon: z.boolean().optional(),
  wonAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  game: z.lazy(() => BingoGameCreateNestedOneWithoutBingoCardInputSchema)
}).strict();

export default BingoCardCreateInputSchema;
