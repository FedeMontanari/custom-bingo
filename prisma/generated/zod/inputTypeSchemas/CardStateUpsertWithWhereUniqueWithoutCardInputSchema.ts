import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateWhereUniqueInputSchema } from './CardStateWhereUniqueInputSchema';
import { CardStateUpdateWithoutCardInputSchema } from './CardStateUpdateWithoutCardInputSchema';
import { CardStateUncheckedUpdateWithoutCardInputSchema } from './CardStateUncheckedUpdateWithoutCardInputSchema';
import { CardStateCreateWithoutCardInputSchema } from './CardStateCreateWithoutCardInputSchema';
import { CardStateUncheckedCreateWithoutCardInputSchema } from './CardStateUncheckedCreateWithoutCardInputSchema';

export const CardStateUpsertWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardStateUpsertWithWhereUniqueWithoutCardInput> = z.object({
  where: z.lazy(() => CardStateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardStateUpdateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => CardStateCreateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema) ]),
}).strict();

export default CardStateUpsertWithWhereUniqueWithoutCardInputSchema;
