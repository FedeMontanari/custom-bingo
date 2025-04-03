import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateWhereInputSchema } from './CardStateWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BingoCardScalarRelationFilterSchema } from './BingoCardScalarRelationFilterSchema';
import { BingoCardWhereInputSchema } from './BingoCardWhereInputSchema';

export const CardStateWhereUniqueInputSchema: z.ZodType<Prisma.CardStateWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CardStateWhereInputSchema),z.lazy(() => CardStateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardStateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardStateWhereInputSchema),z.lazy(() => CardStateWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  marked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => BingoCardScalarRelationFilterSchema),z.lazy(() => BingoCardWhereInputSchema) ]).optional(),
}).strict());

export default CardStateWhereUniqueInputSchema;
