import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardStateCreateManyCardInputSchema: z.ZodType<Prisma.CardStateCreateManyCardInput> = z.object({
  id: z.string().cuid().optional(),
  content: z.string(),
  marked: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CardStateCreateManyCardInputSchema;
