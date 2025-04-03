import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardStateCountOrderByAggregateInputSchema } from './CardStateCountOrderByAggregateInputSchema';
import { CardStateMaxOrderByAggregateInputSchema } from './CardStateMaxOrderByAggregateInputSchema';
import { CardStateMinOrderByAggregateInputSchema } from './CardStateMinOrderByAggregateInputSchema';

export const CardStateOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardStateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  marked: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardStateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardStateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardStateMinOrderByAggregateInputSchema).optional()
}).strict();

export default CardStateOrderByWithAggregationInputSchema;
