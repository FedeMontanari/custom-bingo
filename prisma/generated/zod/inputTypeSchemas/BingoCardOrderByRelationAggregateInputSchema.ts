import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BingoCardOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BingoCardOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BingoCardOrderByRelationAggregateInputSchema;
