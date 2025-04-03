import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateCreateWithoutCardInputSchema } from './CardStateCreateWithoutCardInputSchema';
import { CardStateUncheckedCreateWithoutCardInputSchema } from './CardStateUncheckedCreateWithoutCardInputSchema';
import { CardStateCreateOrConnectWithoutCardInputSchema } from './CardStateCreateOrConnectWithoutCardInputSchema';
import { CardStateCreateManyCardInputEnvelopeSchema } from './CardStateCreateManyCardInputEnvelopeSchema';
import { CardStateWhereUniqueInputSchema } from './CardStateWhereUniqueInputSchema';

export const CardStateCreateNestedManyWithoutCardInputSchema: z.ZodType<Prisma.CardStateCreateNestedManyWithoutCardInput> = z.object({
  create: z.union([ z.lazy(() => CardStateCreateWithoutCardInputSchema),z.lazy(() => CardStateCreateWithoutCardInputSchema).array(),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardStateCreateOrConnectWithoutCardInputSchema),z.lazy(() => CardStateCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardStateCreateManyCardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardStateWhereUniqueInputSchema),z.lazy(() => CardStateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CardStateCreateNestedManyWithoutCardInputSchema;
