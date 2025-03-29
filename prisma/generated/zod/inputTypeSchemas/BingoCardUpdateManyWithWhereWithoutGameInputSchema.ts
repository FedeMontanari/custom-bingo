import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardScalarWhereInputSchema } from './BingoCardScalarWhereInputSchema';
import { BingoCardUpdateManyMutationInputSchema } from './BingoCardUpdateManyMutationInputSchema';
import { BingoCardUncheckedUpdateManyWithoutGameInputSchema } from './BingoCardUncheckedUpdateManyWithoutGameInputSchema';

export const BingoCardUpdateManyWithWhereWithoutGameInputSchema: z.ZodType<Prisma.BingoCardUpdateManyWithWhereWithoutGameInput> = z.object({
  where: z.lazy(() => BingoCardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BingoCardUpdateManyMutationInputSchema),z.lazy(() => BingoCardUncheckedUpdateManyWithoutGameInputSchema) ]),
}).strict();

export default BingoCardUpdateManyWithWhereWithoutGameInputSchema;
