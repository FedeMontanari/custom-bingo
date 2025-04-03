import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BingoCardCountOrderByAggregateInputSchema } from './BingoCardCountOrderByAggregateInputSchema';
import { BingoCardMaxOrderByAggregateInputSchema } from './BingoCardMaxOrderByAggregateInputSchema';
import { BingoCardMinOrderByAggregateInputSchema } from './BingoCardMinOrderByAggregateInputSchema';

export const BingoCardOrderByWithAggregationInputSchema: z.ZodType<Prisma.BingoCardOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gameId: z.lazy(() => SortOrderSchema).optional(),
  hasWon: z.lazy(() => SortOrderSchema).optional(),
  playerName: z.lazy(() => SortOrderSchema).optional(),
  wonAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BingoCardCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BingoCardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BingoCardMinOrderByAggregateInputSchema).optional()
}).strict();

export default BingoCardOrderByWithAggregationInputSchema;
