import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereInputSchema } from './BingoCardWhereInputSchema';

export const BingoCardScalarRelationFilterSchema: z.ZodType<Prisma.BingoCardScalarRelationFilter> = z.object({
  is: z.lazy(() => BingoCardWhereInputSchema).optional(),
  isNot: z.lazy(() => BingoCardWhereInputSchema).optional()
}).strict();

export default BingoCardScalarRelationFilterSchema;
