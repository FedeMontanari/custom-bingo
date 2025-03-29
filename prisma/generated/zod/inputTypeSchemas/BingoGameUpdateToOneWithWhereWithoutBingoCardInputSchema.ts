import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoGameWhereInputSchema } from './BingoGameWhereInputSchema';
import { BingoGameUpdateWithoutBingoCardInputSchema } from './BingoGameUpdateWithoutBingoCardInputSchema';
import { BingoGameUncheckedUpdateWithoutBingoCardInputSchema } from './BingoGameUncheckedUpdateWithoutBingoCardInputSchema';

export const BingoGameUpdateToOneWithWhereWithoutBingoCardInputSchema: z.ZodType<Prisma.BingoGameUpdateToOneWithWhereWithoutBingoCardInput> = z.object({
  where: z.lazy(() => BingoGameWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BingoGameUpdateWithoutBingoCardInputSchema),z.lazy(() => BingoGameUncheckedUpdateWithoutBingoCardInputSchema) ]),
}).strict();

export default BingoGameUpdateToOneWithWhereWithoutBingoCardInputSchema;
