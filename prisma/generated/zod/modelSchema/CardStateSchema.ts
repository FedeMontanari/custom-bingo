import { z } from 'zod';

/////////////////////////////////////////
// CARD STATE SCHEMA
/////////////////////////////////////////

export const CardStateSchema = z.object({
  id: z.string().cuid(),
  content: z.string(),
  marked: z.boolean(),
  cardId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CardState = z.infer<typeof CardStateSchema>

export default CardStateSchema;
