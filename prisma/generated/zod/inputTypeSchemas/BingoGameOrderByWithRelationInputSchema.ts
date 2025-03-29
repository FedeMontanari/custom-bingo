import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BingoCardOrderByRelationAggregateInputSchema } from './BingoCardOrderByRelationAggregateInputSchema';

export const BingoGameOrderByWithRelationInputSchema: z.ZodType<Prisma.BingoGameOrderByWithRelationInput> = z.object({
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
  BingoCard: z.lazy(() => BingoCardOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BingoGameOrderByWithRelationInputSchema;
