import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardStateUncheckedCreateInputSchema: z.ZodType<Prisma.CardStateUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  marked: z.boolean().optional(),
  cardId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CardStateUncheckedCreateInputSchema;
