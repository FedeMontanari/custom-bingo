import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CardStateOrderByRelationAggregateInputSchema } from './CardStateOrderByRelationAggregateInputSchema';
import { BingoGameOrderByWithRelationInputSchema } from './BingoGameOrderByWithRelationInputSchema';

export const BingoCardOrderByWithRelationInputSchema: z.ZodType<Prisma.BingoCardOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  gameId: z.lazy(() => SortOrderSchema).optional(),
  hasWon: z.lazy(() => SortOrderSchema).optional(),
  playerName: z.lazy(() => SortOrderSchema).optional(),
  wonAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  cardState: z.lazy(() => CardStateOrderByRelationAggregateInputSchema).optional(),
  game: z.lazy(() => BingoGameOrderByWithRelationInputSchema).optional()
}).strict();

export default BingoCardOrderByWithRelationInputSchema;
