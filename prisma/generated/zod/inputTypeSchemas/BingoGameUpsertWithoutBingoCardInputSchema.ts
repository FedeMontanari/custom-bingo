import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameUpdateWithoutBingoCardInputSchema } from './BingoGameUpdateWithoutBingoCardInputSchema';
import { BingoGameUncheckedUpdateWithoutBingoCardInputSchema } from './BingoGameUncheckedUpdateWithoutBingoCardInputSchema';
import { BingoGameCreateWithoutBingoCardInputSchema } from './BingoGameCreateWithoutBingoCardInputSchema';
import { BingoGameUncheckedCreateWithoutBingoCardInputSchema } from './BingoGameUncheckedCreateWithoutBingoCardInputSchema';
import { BingoGameWhereInputSchema } from './BingoGameWhereInputSchema';

export const BingoGameUpsertWithoutBingoCardInputSchema: z.ZodType<Prisma.BingoGameUpsertWithoutBingoCardInput> = z.object({
  update: z.union([ z.lazy(() => BingoGameUpdateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedUpdateWithoutBingoCardInputSchema) ]),
  create: z.union([ z.lazy(() => BingoGameCreateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedCreateWithoutBingoCardInputSchema) ]),
  where: z.lazy(() => BingoGameWhereInputSchema).optional()
}).strict();

export default BingoGameUpsertWithoutBingoCardInputSchema;
