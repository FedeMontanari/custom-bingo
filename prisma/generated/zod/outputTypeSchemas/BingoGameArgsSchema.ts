import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameSelectSchema } from '../inputTypeSchemas/BingoGameSelectSchema';
import { BingoGameIncludeSchema } from '../inputTypeSchemas/BingoGameIncludeSchema';

export const BingoGameArgsSchema: z.ZodType<Prisma.BingoGameDefaultArgs> = z.object({
  select: z.lazy(() => BingoGameSelectSchema).optional(),
  include: z.lazy(() => BingoGameIncludeSchema).optional(),
}).strict();

export default BingoGameArgsSchema;
