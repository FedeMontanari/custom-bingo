import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameWhereUniqueInputSchema } from './BingoGameWhereUniqueInputSchema';
import { BingoGameCreateWithoutBingoCardInputSchema } from './BingoGameCreateWithoutBingoCardInputSchema';
import { BingoGameUncheckedCreateWithoutBingoCardInputSchema } from './BingoGameUncheckedCreateWithoutBingoCardInputSchema';

export const BingoGameCreateOrConnectWithoutBingoCardInputSchema: z.ZodType<Prisma.BingoGameCreateOrConnectWithoutBingoCardInput> = z.object({
  where: z.lazy(() => BingoGameWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BingoGameCreateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedCreateWithoutBingoCardInputSchema) ]),
}).strict();

export default BingoGameCreateOrConnectWithoutBingoCardInputSchema;
