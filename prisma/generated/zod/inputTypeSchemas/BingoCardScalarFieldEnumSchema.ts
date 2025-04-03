import { z } from 'zod';

export const BingoCardScalarFieldEnumSchema = z.enum(['id','gameId','hasWon','playerName','wonAt','createdAt','updatedAt']);

export default BingoCardScalarFieldEnumSchema;
