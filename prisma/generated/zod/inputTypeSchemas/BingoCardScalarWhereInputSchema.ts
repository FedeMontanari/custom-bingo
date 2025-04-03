import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BingoCardScalarWhereInputSchema: z.ZodType<Prisma.BingoCardScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BingoCardScalarWhereInputSchema),z.lazy(() => BingoCardScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoCardScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoCardScalarWhereInputSchema),z.lazy(() => BingoCardScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hasWon: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  playerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  wonAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BingoCardScalarWhereInputSchema;
