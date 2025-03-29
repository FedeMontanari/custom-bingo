import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BingoGameScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BingoGameScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BingoGameScalarWhereWithAggregatesInputSchema),z.lazy(() => BingoGameScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoGameScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoGameScalarWhereWithAggregatesInputSchema),z.lazy(() => BingoGameScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  cols: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  organizer: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  players: z.lazy(() => StringNullableListFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BingoGameScalarWhereWithAggregatesInputSchema;
