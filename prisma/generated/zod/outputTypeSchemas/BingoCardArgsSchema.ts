import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardSelectSchema } from '../inputTypeSchemas/BingoCardSelectSchema';
import { BingoCardIncludeSchema } from '../inputTypeSchemas/BingoCardIncludeSchema';

export const BingoCardArgsSchema: z.ZodType<Prisma.BingoCardDefaultArgs> = z.object({
  select: z.lazy(() => BingoCardSelectSchema).optional(),
  include: z.lazy(() => BingoCardIncludeSchema).optional(),
}).strict();

export default BingoCardArgsSchema;
