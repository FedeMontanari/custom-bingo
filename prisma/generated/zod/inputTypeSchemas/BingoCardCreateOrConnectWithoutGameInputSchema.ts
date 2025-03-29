import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardCreateWithoutGameInputSchema } from './BingoCardCreateWithoutGameInputSchema';
import { BingoCardUncheckedCreateWithoutGameInputSchema } from './BingoCardUncheckedCreateWithoutGameInputSchema';

export const BingoCardCreateOrConnectWithoutGameInputSchema: z.ZodType<Prisma.BingoCardCreateOrConnectWithoutGameInput> = z.object({
  where: z.lazy(() => BingoCardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BingoCardCreateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema) ]),
}).strict();

export default BingoCardCreateOrConnectWithoutGameInputSchema;
