import { z } from 'zod';

export const BingoCardScalarFieldEnumSchema = z.enum(['id','gameId','cardState','hasWon','wonAt','createdAt','updatedAt']);

export default BingoCardScalarFieldEnumSchema;
