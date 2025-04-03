import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateWithoutCardStateInputSchema } from './BingoCardCreateWithoutCardStateInputSchema';
import { BingoCardUncheckedCreateWithoutCardStateInputSchema } from './BingoCardUncheckedCreateWithoutCardStateInputSchema';
import { BingoCardCreateOrConnectWithoutCardStateInputSchema } from './BingoCardCreateOrConnectWithoutCardStateInputSchema';
import { BingoCardUpsertWithoutCardStateInputSchema } from './BingoCardUpsertWithoutCardStateInputSchema';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';
import { BingoCardUpdateToOneWithWhereWithoutCardStateInputSchema } from './BingoCardUpdateToOneWithWhereWithoutCardStateInputSchema';
import { BingoCardUpdateWithoutCardStateInputSchema } from './BingoCardUpdateWithoutCardStateInputSchema';
import { BingoCardUncheckedUpdateWithoutCardStateInputSchema } from './BingoCardUncheckedUpdateWithoutCardStateInputSchema';

export const BingoCardUpdateOneRequiredWithoutCardStateNestedInputSchema: z.ZodType<Prisma.BingoCardUpdateOneRequiredWithoutCardStateNestedInput> = z.object({
  create: z.union([ z.lazy(() => BingoCardCreateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutCardStateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BingoCardCreateOrConnectWithoutCardStateInputSchema).optional(),
  upsert: z.lazy(() => BingoCardUpsertWithoutCardStateInputSchema).optional(),
  connect: z.lazy(() => BingoCardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BingoCardUpdateToOneWithWhereWithoutCardStateInputSchema),z.lazy(() => BingoCardUpdateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedUpdateWithoutCardStateInputSchema) ]).optional(),
}).strict();

export default BingoCardUpdateOneRequiredWithoutCardStateNestedInputSchema;
