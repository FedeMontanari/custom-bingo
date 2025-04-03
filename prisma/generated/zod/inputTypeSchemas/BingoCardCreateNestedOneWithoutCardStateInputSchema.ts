import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateWithoutCardStateInputSchema } from './BingoCardCreateWithoutCardStateInputSchema';
import { BingoCardUncheckedCreateWithoutCardStateInputSchema } from './BingoCardUncheckedCreateWithoutCardStateInputSchema';
import { BingoCardCreateOrConnectWithoutCardStateInputSchema } from './BingoCardCreateOrConnectWithoutCardStateInputSchema';
import { BingoCardWhereUniqueInputSchema } from './BingoCardWhereUniqueInputSchema';

export const BingoCardCreateNestedOneWithoutCardStateInputSchema: z.ZodType<Prisma.BingoCardCreateNestedOneWithoutCardStateInput> = z.object({
  create: z.union([ z.lazy(() => BingoCardCreateWithoutCardStateInputSchema),z.lazy(() => BingoCardUncheckedCreateWithoutCardStateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BingoCardCreateOrConnectWithoutCardStateInputSchema).optional(),
  connect: z.lazy(() => BingoCardWhereUniqueInputSchema).optional()
}).strict();

export default BingoCardCreateNestedOneWithoutCardStateInputSchema;
