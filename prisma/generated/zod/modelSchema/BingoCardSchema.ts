import { z } from 'zod';

/////////////////////////////////////////
// BINGO CARD SCHEMA
/////////////////////////////////////////

export const BingoCardSchema = z.object({
  id: z.string().cuid(),
  gameId: z.string(),
  hasWon: z.boolean(),
  playerName: z.string(),
  wonAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BingoCard = z.infer<typeof BingoCardSchema>

export default BingoCardSchema;
