import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CardStateUpdateManyWithoutCardNestedInputSchema } from './CardStateUpdateManyWithoutCardNestedInputSchema';
import { BingoGameUpdateOneRequiredWithoutBingoCardNestedInputSchema } from './BingoGameUpdateOneRequiredWithoutBingoCardNestedInputSchema';

export const BingoCardUpdateInputSchema: z.ZodType<Prisma.BingoCardUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hasWon: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  playerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  wonAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cardState: z.lazy(() => CardStateUpdateManyWithoutCardNestedInputSchema).optional(),
  game: z.lazy(() => BingoGameUpdateOneRequiredWithoutBingoCardNestedInputSchema).optional()
}).strict();

export default BingoCardUpdateInputSchema;
