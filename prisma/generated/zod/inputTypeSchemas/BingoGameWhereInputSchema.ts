import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BingoCardListRelationFilterSchema } from './BingoCardListRelationFilterSchema';

export const BingoGameWhereInputSchema: z.ZodType<Prisma.BingoGameWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BingoGameWhereInputSchema),z.lazy(() => BingoGameWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoGameWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoGameWhereInputSchema),z.lazy(() => BingoGameWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rows: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  cols: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  content: z.lazy(() => JsonFilterSchema).optional(),
  organizer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  players: z.lazy(() => StringNullableListFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  BingoCard: z.lazy(() => BingoCardListRelationFilterSchema).optional()
}).strict();

export default BingoGameWhereInputSchema;
