import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereInputSchema } from './BingoCardWhereInputSchema';
import { BingoCardUpdateWithoutCardStateInputSchema } from './BingoCardUpdateWithoutCardStateInputSchema';
import { BingoCardUncheckedUpdateWithoutCardStateInputSchema } from './BingoCardUncheckedUpdateWithoutCardStateInputSchema';

export const BingoCardUpdateToOneWithWhereWithoutCardStateInputSchema: z.ZodType<Prisma.BingoCardUpdateToOneWithWhereWithoutCardStateInput> = z.object({
  where: z.lazy(() => BingoCardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BingoCardUpdateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedUpdateWithoutCardStateInputSchema) ]),
}).strict();

export default BingoCardUpdateToOneWithWhereWithoutCardStateInputSchema;
