import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateCreateWithoutCardInputSchema } from './CardStateCreateWithoutCardInputSchema';
import { CardStateUncheckedCreateWithoutCardInputSchema } from './CardStateUncheckedCreateWithoutCardInputSchema';
import { CardStateCreateOrConnectWithoutCardInputSchema } from './CardStateCreateOrConnectWithoutCardInputSchema';
import { CardStateUpsertWithWhereUniqueWithoutCardInputSchema } from './CardStateUpsertWithWhereUniqueWithoutCardInputSchema';
import { CardStateCreateManyCardInputEnvelopeSchema } from './CardStateCreateManyCardInputEnvelopeSchema';
import { CardStateWhereUniqueInputSchema } from './CardStateWhereUniqueInputSchema';
import { CardStateUpdateWithWhereUniqueWithoutCardInputSchema } from './CardStateUpdateWithWhereUniqueWithoutCardInputSchema';
import { CardStateUpdateManyWithWhereWithoutCardInputSchema } from './CardStateUpdateManyWithWhereWithoutCardInputSchema';
import { CardStateScalarWhereInputSchema } from './CardStateScalarWhereInputSchema';

export const CardStateUpdateManyWithoutCardNestedInputSchema: z.ZodType<Prisma.CardStateUpdateManyWithoutCardNestedInput> = z.object({
  create: z.union([ z.lazy(() => CardStateCreateWithoutCardInputSchema),z.lazy(() => CardStateCreateWithoutCardInputSchema).array(),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema),z.lazy(() => CardStateUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardStateCreateOrConnectWithoutCardInputSchema),z.lazy(() => CardStateCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardStateUpsertWithWhereUniqueWithoutCardInputSchema),z.lazy(() => CardStateUpsertWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardStateCreateManyCardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardStateWhereUniqueInputSchema),z.lazy(() => CardStateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardStateWhereUniqueInputSchema),z.lazy(() => CardStateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardStateWhereUniqueInputSchema),z.lazy(() => CardStateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardStateWhereUniqueInputSchema),z.lazy(() => CardStateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardStateUpdateWithWhereUniqueWithoutCardInputSchema),z.lazy(() => CardStateUpdateWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardStateUpdateManyWithWhereWithoutCardInputSchema),z.lazy(() => CardStateUpdateManyWithWhereWithoutCardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardStateScalarWhereInputSchema),z.lazy(() => CardStateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CardStateUpdateManyWithoutCardNestedInputSchema;
