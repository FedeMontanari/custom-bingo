import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CardStateScalarWhereInputSchema: z.ZodType<Prisma.CardStateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CardStateScalarWhereInputSchema),z.lazy(() => CardStateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardStateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardStateScalarWhereInputSchema),z.lazy(() => CardStateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  marked: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default CardStateScalarWhereInputSchema;
