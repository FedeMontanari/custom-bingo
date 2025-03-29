import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateWithoutGameInputSchema } from './BingoCardCreateWithoutGameInputSchema';
import { BingoCardUncheckedCreateWithoutGameInputSchema } from './BingoCardUncheckedCreateWithoutGameInputSchema';
import { BingoCardCreateOrConnectWithoutGameInputSchema } from './BingoCardCreateOrConnectWithoutGameInputSchema';
import { BingoCardUpsertWithWhereUniqueWithoutGameInputSchema } from './BingoCardUpsertWithWhereUniqueWithoutGameInputSchema';
import { BingoCardCreateManyGameInputEnvelopeSchema } from './BingoCardCreateManyGameInputEnvelopeSchema';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardUpdateWithWhereUniqueWithoutGameInputSchema } from './BingoCardUpdateWithWhereUniqueWithoutGameInputSchema';
import { BingoCardUpdateManyWithWhereWithoutGameInputSchema } from './BingoCardUpdateManyWithWhereWithoutGameInputSchema';
import { BingoCardScalarWhereInputSchema } from './BingoCardScalarWhereInputSchema';

export const BingoCardUpdateManyWithoutGameNestedInputSchema: z.ZodType<Prisma.BingoCardUpdateManyWithoutGameNestedInput> = z.object({
  create: z.union([ z.lazy(() => BingoCardCreateWithoutGameInputSchema),z.lazy(() => BingoCardCreateWithoutGameInputSchema).array(),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutGameInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BingoCardCreateOrConnectWithoutGameInputSchema),z.lazy(() => BingoCardCreateOrConnectWithoutGameInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BingoCardUpsertWithWhereUniqueWithoutGameInputSchema),z.lazy(() => BingoCardUpsertWithWhereUniqueWithoutGameInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BingoCardCreateManyGameInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BingoCardWhereUniqueInputSchema),z.lazy(() => BingoCardWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BingoCardWhereUniqueInputSchema),z.lazy(() => BingoCardWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BingoCardWhereUniqueInputSchema),z.lazy(() => BingoCardWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BingoCardWhereUniqueInputSchema),z.lazy(() => BingoCardWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BingoCardUpdateWithWhereUniqueWithoutGameInputSchema),z.lazy(() => BingoCardUpdateWithWhereUniqueWithoutGameInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BingoCardUpdateManyWithWhereWithoutGameInputSchema),z.lazy(() => BingoCardUpdateManyWithWhereWithoutGameInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BingoCardScalarWhereInputSchema),z.lazy(() => BingoCardScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BingoCardUpdateManyWithoutGameNestedInputSchema;
