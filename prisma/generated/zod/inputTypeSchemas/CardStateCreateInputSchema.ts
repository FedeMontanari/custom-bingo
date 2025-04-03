import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateNestedOneWithoutCardStateInputSchema } from './BingoCardCreateNestedOneWithoutCardStateInputSchema';

export const CardStateCreateInputSchema: z.ZodType<Prisma.CardStateCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  marked: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  card: z.lazy(() => BingoCardCreateNestedOneWithoutCardStateInputSchema)
}).strict();

export default CardStateCreateInputSchema;
