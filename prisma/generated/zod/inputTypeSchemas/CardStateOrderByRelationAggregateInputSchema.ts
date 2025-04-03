import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardStateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardStateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CardStateOrderByRelationAggregateInputSchema;
