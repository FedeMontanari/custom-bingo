import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateWithoutGameInputSchema } from './BingoCardCreateWithoutGameInputSchema';
import { BingoCardUncheckedCreateWithoutGameInputSchema } from './BingoCardUncheckedCreateWithoutGameInputSchema';
import { BingoCardCreateOrConnectWithoutGameInputSchema } from './BingoCardCreateOrConnectWithoutGameInputSchema';
import { BingoCardCreateManyGameInputEnvelopeSchema } from './BingoCardCreateManyGameInputEnvelopeSchema';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';

export const BingoCardUncheckedCreateNestedManyWithoutGameInputSchema: z.ZodType<Prisma.BingoCardUncheckedCreateNestedManyWithoutGameInput> = z.object({
  create: z.union([ z.lazy(() => BingoCardCreateWithoutGameInputSchema),z.lazy(() => BingoCardCreateWithoutGameInputSchema).array(),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BingoCardCreateOrConnectWithoutGameInputSchema),z.lazy(() => BingoCardCreateOrConnectWithoutGameInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BingoCardCreateManyGameInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BingoCardWhereUniqueInputSchema),z.lazy(() => BingoCardWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BingoCardUncheckedCreateNestedManyWithoutGameInputSchema;
