import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardCreateWithoutCardStateInputSchema } from './BingoCardCreateWithoutCardStateInputSchema';
import { BingoCardUncheckedCreateWithoutCardStateInputSchema } from './BingoCardUncheckedCreateWithoutCardStateInputSchema';

export const BingoCardCreateOrConnectWithoutCardStateInputSchema: z.ZodType<Prisma.BingoCardCreateOrConnectWithoutCardStateInput> = z.object({
  where: z.lazy(() => BingoCardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BingoCardCreateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutCardStateInputSchema) ]),
}).strict();

export default BingoCardCreateOrConnectWithoutCardStateInputSchema;
