import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateScalarWhereInputSchema } from './CardStateScalarWhereInputSchema';
import { CardStateUpdateManyMutationInputSchema } from './CardStateUpdateManyMutationInputSchema';
import { CardStateUncheckedUpdateManyWithoutCardInputSchema } from './CardStateUncheckedUpdateManyWithoutCardInputSchema';

export const CardStateUpdateManyWithWhereWithoutCardInputSchema: z.ZodType<Prisma.CardStateUpdateManyWithWhereWithoutCardInput> = z.object({
  where: z.lazy(() => CardStateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardStateUpdateManyMutationInputSchema),z.lazy(() => CardStateUncheckedUpdateManyWithoutCardInputSchema) ]),
}).strict();

export default CardStateUpdateManyWithWhereWithoutCardInputSchema;
