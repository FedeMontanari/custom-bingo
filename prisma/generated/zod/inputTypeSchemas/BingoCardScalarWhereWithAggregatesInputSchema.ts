import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BingoCardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BingoCardScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BingoCardScalarWhereWithAggregatesInputSchema),z.lazy(() => BingoCardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoCardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoCardScalarWhereWithAggregatesInputSchema),z.lazy(() => BingoCardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  gameId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cardState: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  hasWon: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  wonAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BingoCardScalarWhereWithAggregatesInputSchema;
