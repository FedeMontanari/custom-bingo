import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateWhereUniqueInputSchema } from './CardStateWhereUniqueInputSchema';
import { CardStateCreateWithoutCardInputSchema } from './CardStateCreateWithoutCardInputSchema';
import { CardStateUncheckedCreateWithoutCardInputSchema } from './CardStateUncheckedCreateWithoutCardInputSchema';

export const CardStateCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.CardStateCreateOrConnectWithoutCardInput> = z.object({
  where: z.lazy(() => CardStateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardStateCreateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema) ]),
}).strict();

export default CardStateCreateOrConnectWithoutCardInputSchema;
