import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameWhereInputSchema } from './BingoGameWhereInputSchema';

export const BingoGameScalarRelationFilterSchema: z.ZodType<Prisma.BingoGameScalarRelationFilter> = z.object({
  is: z.lazy(() => BingoGameWhereInputSchema).optional(),
  isNot: z.lazy(() => BingoGameWhereInputSchema).optional()
}).strict();

export default BingoGameScalarRelationFilterSchema;
