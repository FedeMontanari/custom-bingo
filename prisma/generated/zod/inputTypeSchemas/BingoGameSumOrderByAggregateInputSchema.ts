import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BingoGameSumOrderByAggregateInputSchema: z.ZodType<Prisma.BingoGameSumOrderByAggregateInput> = z.object({
  rows: z.lazy(() => SortOrderSchema).optional(),
  cols: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BingoGameSumOrderByAggregateInputSchema;
