import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BingoCardMinOrderByAggregateInputSchema: z.ZodType<Prisma.BingoCardMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gameId: z.lazy(() => SortOrderSchema).optional(),
  hasWon: z.lazy(() => SortOrderSchema).optional(),
  playerName: z.lazy(() => SortOrderSchema).optional(),
  wonAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BingoCardMinOrderByAggregateInputSchema;
