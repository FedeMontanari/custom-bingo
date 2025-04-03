import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardCountOutputTypeSelectSchema } from './BingoCardCountOutputTypeSelectSchema';

export const BingoCardCountOutputTypeArgsSchema: z.ZodType<Prisma.BingoCardCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BingoCardCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BingoCardCountOutputTypeSelectSchema;
