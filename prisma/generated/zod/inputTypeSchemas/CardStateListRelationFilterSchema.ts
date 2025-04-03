import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateWhereInputSchema } from './CardStateWhereInputSchema';

export const CardStateListRelationFilterSchema: z.ZodType<Prisma.CardStateListRelationFilter> = z.object({
  every: z.lazy(() => CardStateWhereInputSchema).optional(),
  some: z.lazy(() => CardStateWhereInputSchema).optional(),
  none: z.lazy(() => CardStateWhereInputSchema).optional()
}).strict();

export default CardStateListRelationFilterSchema;
