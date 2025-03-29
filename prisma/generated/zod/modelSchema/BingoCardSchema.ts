import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// BINGO CARD SCHEMA
/////////////////////////////////////////

export const BingoCardSchema = z.object({
  id: z.string().cuid(),
  gameId: z.string(),
  cardState: JsonValueSchema,
  hasWon: z.boolean(),
  wonAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BingoCard = z.infer<typeof BingoCardSchema>

export default BingoCardSchema;
