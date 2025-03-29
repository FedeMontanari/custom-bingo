import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardFindManyArgsSchema } from "../outputTypeSchemas/BingoCardFindManyArgsSchema"
import { BingoGameCountOutputTypeArgsSchema } from "../outputTypeSchemas/BingoGameCountOutputTypeArgsSchema"

export const BingoGameSelectSchema: z.ZodType<Prisma.BingoGameSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  title: z.boolean().optional(),
  rows: z.boolean().optional(),
  cols: z.boolean().optional(),
  content: z.boolean().optional(),
  organizer: z.boolean().optional(),
  players: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  BingoCard: z.union([z.boolean(),z.lazy(() => BingoCardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BingoGameCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BingoGameSelectSchema;
