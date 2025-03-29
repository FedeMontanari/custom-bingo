import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameCreateWithoutBingoCardInputSchema } from './BingoGameCreateWithoutBingoCardInputSchema';
import { BingoGameUncheckedCreateWithoutBingoCardInputSchema } from './BingoGameUncheckedCreateWithoutBingoCardInputSchema';
import { BingoGameCreateOrConnectWithoutBingoCardInputSchema } from './BingoGameCreateOrConnectWithoutBingoCardInputSchema';
import { BingoGameUpsertWithoutBingoCardInputSchema } from './BingoGameUpsertWithoutBingoCardInputSchema';
import { BingoGameWhereUniqueInputSchema } from './BingoGameWhereUniqueInputSchema';
import { BingoGameUpdateToOneWithWhereWithoutBingoCardInputSchema } from './BingoGameUpdateToOneWithWhereWithoutBingoCardInputSchema';
import { BingoGameUpdateWithoutBingoCardInputSchema } from './BingoGameUpdateWithoutBingoCardInputSchema';
import { BingoGameUncheckedUpdateWithoutBingoCardInputSchema } from './BingoGameUncheckedUpdateWithoutBingoCardInputSchema';

export const BingoGameUpdateOneRequiredWithoutBingoCardNestedInputSchema: z.ZodType<Prisma.BingoGameUpdateOneRequiredWithoutBingoCardNestedInput> = z.object({
  create: z.union([ z.lazy(() => BingoGameCreateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedCreateWithoutBingoCardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BingoGameCreateOrConnectWithoutBingoCardInputSchema).optional(),
  upsert: z.lazy(() => BingoGameUpsertWithoutBingoCardInputSchema).optional(),
  connect: z.lazy(() => BingoGameWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BingoGameUpdateToOneWithWhereWithoutBingoCardInputSchema),z.lazy(() => BingoGameUpdateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedUpdateWithoutBingoCardInputSchema) ]).optional(),
}).strict();

export default BingoGameUpdateOneRequiredWithoutBingoCardNestedInputSchema;
