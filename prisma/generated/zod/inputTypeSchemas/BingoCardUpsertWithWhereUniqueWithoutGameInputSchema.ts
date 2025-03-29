import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardUpdateWithoutGameInputSchema } from './BingoCardUpdateWithoutGameInputSchema';
import { BingoCardUncheckedUpdateWithoutGameInputSchema } from './BingoCardUncheckedUpdateWithoutGameInputSchema';
import { BingoCardCreateWithoutGameInputSchema } from './BingoCardCreateWithoutGameInputSchema';
import { BingoCardUncheckedCreateWithoutGameInputSchema } from './BingoCardUncheckedCreateWithoutGameInputSchema';

export const BingoCardUpsertWithWhereUniqueWithoutGameInputSchema: z.ZodType<Prisma.BingoCardUpsertWithWhereUniqueWithoutGameInput> = z.object({
  where: z.lazy(() => BingoCardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BingoCardUpdateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedUpdateWithoutGameInputSchema) ]),
  create: z.union([ z.lazy(() => BingoCardCreateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema) ]),
}).strict();

export default BingoCardUpsertWithWhereUniqueWithoutGameInputSchema;
