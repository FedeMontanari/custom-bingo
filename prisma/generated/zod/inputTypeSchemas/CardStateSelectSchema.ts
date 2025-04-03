import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BingoCardArgsSchema } from "../outputTypeSchemas/BingoCardArgsSchema"

export const CardStateSelectSchema: z.ZodType<Prisma.CardStateSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  marked: z.boolean().optional(),
  cardId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => BingoCardArgsSchema)]).optional(),
}).strict()

export default CardStateSelectSchema;
