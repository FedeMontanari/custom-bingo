import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BingoGameCountOrderByAggregateInputSchema } from './BingoGameCountOrderByAggregateInputSchema';
import { BingoGameAvgOrderByAggregateInputSchema } from './BingoGameAvgOrderByAggregateInputSchema';
import { BingoGameMaxOrderByAggregateInputSchema } from './BingoGameMaxOrderByAggregateInputSchema';
import { BingoGameMinOrderByAggregateInputSchema } from './BingoGameMinOrderByAggregateInputSchema';
import { BingoGameSumOrderByAggregateInputSchema } from './BingoGameSumOrderByAggregateInputSchema';

export const BingoGameOrderByWithAggregationInputSchema: z.ZodType<Prisma.BingoGameOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  organizer: z.lazy(() => SortOrderSchema).optional(),
  players: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BingoGameCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BingoGameAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BingoGameMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BingoGameMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BingoGameSumOrderByAggregateInputSchema).optional()
}).strict();

export default BingoGameOrderByWithAggregationInputSchema;
