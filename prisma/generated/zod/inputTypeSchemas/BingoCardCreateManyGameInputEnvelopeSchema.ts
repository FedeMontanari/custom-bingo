import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BingoCardCreateManyGameInputSchema } from './BingoCardCreateManyGameInputSchema';

export const BingoCardCreateManyGameInputEnvelopeSchema: z.ZodType<Prisma.BingoCardCreateManyGameInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BingoCardCreateManyGameInputSchema),z.lazy(() => BingoCardCreateManyGameInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BingoCardCreateManyGameInputEnvelopeSchema;
