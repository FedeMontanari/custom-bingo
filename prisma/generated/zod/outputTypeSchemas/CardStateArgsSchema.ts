import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateSelectSchema } from '../inputTypeSchemas/CardStateSelectSchema';
import { CardStateIncludeSchema } from '../inputTypeSchemas/CardStateIncludeSchema';

export const CardStateArgsSchema: z.ZodType<Prisma.CardStateDefaultArgs> = z.object({
  select: z.lazy(() => CardStateSelectSchema).optional(),
  include: z.lazy(() => CardStateIncludeSchema).optional(),
}).strict();

export default CardStateArgsSchema;
