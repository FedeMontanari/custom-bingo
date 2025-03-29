import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// BINGO GAME SCHEMA
/////////////////////////////////////////

export const BingoGameSchema = z.object({
  id: z.string().cuid(),
  code: z.string(),
  title: z.string(),
  rows: z.number().int(),
  cols: z.number().int(),
  content: JsonValueSchema,
  organizer: z.string(),
  players: z.string().array(),
  isActive: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BingoGame = z.infer<typeof BingoGameSchema>

export default BingoGameSchema;
