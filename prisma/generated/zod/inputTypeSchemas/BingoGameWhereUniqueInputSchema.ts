import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameWhereInputSchema } from './BingoGameWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BingoCardListRelationFilterSchema } from './BingoCardListRelationFilterSchema';

export const BingoGameWhereUniqueInputSchema: z.ZodType<Prisma.BingoGameWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    code: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => BingoGameWhereInputSchema),z.lazy(() => BingoGameWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoGameWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoGameWhereInputSchema),z.lazy(() => BingoGameWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  cols: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  content: z.lazy(() => JsonFilterSchema).optional(),
  organizer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  players: z.lazy(() => StringNullableListFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  BingoCard: z.lazy(() => BingoCardListRelationFilterSchema).optional()
}).strict());

export default BingoGameWhereUniqueInputSchema;
