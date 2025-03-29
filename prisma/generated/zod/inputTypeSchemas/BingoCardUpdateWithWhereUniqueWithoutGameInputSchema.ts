import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardUpdateWithoutGameInputSchema } from './BingoCardUpdateWithoutGameInputSchema';
import { BingoCardUncheckedUpdateWithoutGameInputSchema } from './BingoCardUncheckedUpdateWithoutGameInputSchema';

export const BingoCardUpdateWithWhereUniqueWithoutGameInputSchema: z.ZodType<Prisma.BingoCardUpdateWithWhereUniqueWithoutGameInput> = z.object({
  where: z.lazy(() => BingoCardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BingoCardUpdateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedUpdateWithoutGameInputSchema) ]),
}).strict();

export default BingoCardUpdateWithWhereUniqueWithoutGameInputSchema;
