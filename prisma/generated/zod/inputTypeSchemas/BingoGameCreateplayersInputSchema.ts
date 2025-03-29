import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BingoGameCreateplayersInputSchema: z.ZodType<Prisma.BingoGameCreateplayersInput> = z.object({
  set: z.string().array()
}).strict();

export default BingoGameCreateplayersInputSchema;
