import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BingoGameOrderByWithRelationInputSchema } from './BingoGameOrderByWithRelationInputSchema';

export const BingoCardOrderByWithRelationInputSchema: z.ZodType<Prisma.BingoCardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gameId: z.lazy(() => SortOrderSchema).optional(),
  cardState: z.lazy(() => SortOrderSchema).optional(),
  hasWon: z.lazy(() => SortOrderSchema).optional(),
  wonAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  game: z.lazy(() => BingoGameOrderByWithRelationInputSchema).optional()
}).strict();

export default BingoCardOrderByWithRelationInputSchema;
