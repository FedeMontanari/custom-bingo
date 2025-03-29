import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoGameArgsSchema } from "../outputTypeSchemas/BingoGameArgsSchema"

export const BingoCardIncludeSchema: z.ZodType<Prisma.BingoCardInclude> = z.object({
  game: z.union([z.boolean(),z.lazy(() => BingoGameArgsSchema)]).optional(),
}).strict()

export default BingoCardIncludeSchema;
