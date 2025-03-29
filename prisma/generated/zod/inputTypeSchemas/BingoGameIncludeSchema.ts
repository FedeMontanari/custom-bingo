import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardFindManyArgsSchema } from "../outputTypeSchemas/BingoCardFindManyArgsSchema"
import { BingoGameCountOutputTypeArgsSchema } from "../outputTypeSchemas/BingoGameCountOutputTypeArgsSchema"

export const BingoGameIncludeSchema: z.ZodType<Prisma.BingoGameInclude> = z.object({
  BingoCard: z.union([z.boolean(),z.lazy(() => BingoCardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BingoGameCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BingoGameIncludeSchema;
