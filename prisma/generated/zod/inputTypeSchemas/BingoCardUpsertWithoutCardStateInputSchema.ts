import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardUpdateWithoutCardStateInputSchema } from './BingoCardUpdateWithoutCardStateInputSchema';
import { BingoCardUncheckedUpdateWithoutCardStateInputSchema } from './BingoCardUncheckedUpdateWithoutCardStateInputSchema';
import { BingoCardCreateWithoutCardStateInputSchema } from './BingoCardCreateWithoutCardStateInputSchema';
import { BingoCardUncheckedCreateWithoutCardStateInputSchema } from './BingoCardUncheckedCreateWithoutCardStateInputSchema';
import { BingoCardWhereInputSchema } from './BingoCardWhereInputSchema';

export const BingoCardUpsertWithoutCardStateInputSchema: z.ZodType<Prisma.BingoCardUpsertWithoutCardStateInput> = z.object({
  update: z.union([ z.lazy(() => BingoCardUpdateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedUpdateWithoutCardStateInputSchema) ]),
  create: z.union([ z.lazy(() => BingoCardCreateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutCardStateInputSchema) ]),
  where: z.lazy(() => BingoCardWhereInputSchema).optional()
}).strict();

export default BingoCardUpsertWithoutCardStateInputSchema;
