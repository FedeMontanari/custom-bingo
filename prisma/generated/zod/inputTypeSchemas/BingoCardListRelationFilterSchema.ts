import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereInputSchema } from './BingoCardWhereInputSchema';

export const BingoCardListRelationFilterSchema: z.ZodType<Prisma.BingoCardListRelationFilter> = z.object({
  every: z.lazy(() => BingoCardWhereInputSchema).optional(),
  some: z.lazy(() => BingoCardWhereInputSchema).optional(),
  none: z.lazy(() => BingoCardWhereInputSchema).optional()
}).strict();

export default BingoCardListRelationFilterSchema;
