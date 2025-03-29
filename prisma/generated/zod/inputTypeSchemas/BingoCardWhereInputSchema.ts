import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BingoGameScalarRelationFilterSchema } from './BingoGameScalarRelationFilterSchema';
import { BingoGameWhereInputSchema } from './BingoGameWhereInputSchema';

export const BingoCardWhereInputSchema: z.ZodType<Prisma.BingoCardWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BingoCardWhereInputSchema),z.lazy(() => BingoCardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BingoCardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BingoCardWhereInputSchema),z.lazy(() => BingoCardWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gameId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cardState: z.lazy(() => JsonFilterSchema).optional(),
  hasWon: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  wonAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  game: z.union([ z.lazy(() => BingoGameScalarRelationFilterSchema),z.lazy(() => BingoGameWhereInputSchema) ]).optional(),
}).strict();

export default BingoCardWhereInputSchema;
