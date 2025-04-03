import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateWhereUniqueInputSchema } from './CardStateWhereUniqueInputSchema';
import { CardStateUpdateWithoutCardInputSchema } from './CardStateUpdateWithoutCardInputSchema';
import { CardStateUncheckedUpdateWithoutCardInputSchema } from './CardStateUncheckedUpdateWithoutCardInputSchema';

export const CardStateUpdateWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardStateUpdateWithWhereUniqueWithoutCardInput> = z.object({
  where: z.lazy(() => CardStateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardStateUpdateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedUpdateWithoutCardInputSchema) ]),
}).strict();

export default CardStateUpdateWithWhereUniqueWithoutCardInputSchema;
