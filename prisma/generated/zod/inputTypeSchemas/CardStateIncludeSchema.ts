import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardArgsSchema } from "../outputTypeSchemas/BingoCardArgsSchema"

export const CardStateIncludeSchema: z.ZodType<Prisma.CardStateInclude> = z.object({
  card: z.union([z.boolean(),z.lazy(() => BingoCardArgsSchema)]).optional(),
}).strict()

export default CardStateIncludeSchema;
