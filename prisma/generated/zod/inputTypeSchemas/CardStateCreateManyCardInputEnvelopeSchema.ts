import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStateCreateManyCardInputSchema } from './CardStateCreateManyCardInputSchema';

export const CardStateCreateManyCardInputEnvelopeSchema: z.ZodType<Prisma.CardStateCreateManyCardInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CardStateCreateManyCardInputSchema),z.lazy(() => CardStateCreateManyCardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CardStateCreateManyCardInputEnvelopeSchema;
