import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BingoCardOrderByWithRelationInputSchema } from './BingoCardOrderByWithRelationInputSchema';

export const CardStateOrderByWithRelationInputSchema: z.ZodType<Prisma.CardStateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  marked: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  card: z.lazy(() => BingoCardOrderByWithRelationInputSchema).optional()
}).strict();

export default CardStateOrderByWithRelationInputSchema;
