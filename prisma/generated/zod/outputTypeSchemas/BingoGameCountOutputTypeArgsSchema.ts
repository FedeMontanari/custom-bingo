import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameCountOutputTypeSelectSchema } from './BingoGameCountOutputTypeSelectSchema';

export const BingoGameCountOutputTypeArgsSchema: z.ZodType<Prisma.BingoGameCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BingoGameCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BingoGameCountOutputTypeSelectSchema;
