import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameCreateWithoutBingoCardInputSchema } from './BingoGameCreateWithoutBingoCardInputSchema';
import { BingoGameUncheckedCreateWithoutBingoCardInputSchema } from './BingoGameUncheckedCreateWithoutBingoCardInputSchema';
import { BingoGameCreateOrConnectWithoutBingoCardInputSchema } from './BingoGameCreateOrConnectWithoutBingoCardInputSchema';
import { BingoGameWhereUniqueInputSchema } from './BingoGameWhereUniqueInputSchema';

export const BingoGameCreateNestedOneWithoutBingoCardInputSchema: z.ZodType<Prisma.BingoGameCreateNestedOneWithoutBingoCardInput> = z.object({
  create: z.union([ z.lazy(() => BingoGameCreateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedCreateWithoutBingoCardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BingoGameCreateOrConnectWithoutBingoCardInputSchema).optional(),
  connect: z.lazy(() => BingoGameWhereUniqueInputSchema).optional()
}).strict();

export default BingoGameCreateNestedOneWithoutBingoCardInputSchema;
