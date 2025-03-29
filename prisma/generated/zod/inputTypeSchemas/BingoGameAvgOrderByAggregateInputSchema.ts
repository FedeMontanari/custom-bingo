import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BingoGameAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BingoGameAvgOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BingoGameAvgOrderByAggregateInputSchema;
