import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardStateUncheckedCreateWithoutCardInputSchema: z.ZodType<Prisma.CardStateUncheckedCreateWithoutCardInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  marked: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CardStateUncheckedCreateWithoutCardInputSchema;
