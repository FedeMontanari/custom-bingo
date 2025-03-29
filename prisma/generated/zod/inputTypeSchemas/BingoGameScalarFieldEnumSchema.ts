import { z } from 'zod';

export const BingoGameScalarFieldEnumSchema = z.enum(['id','code','title','rows','cols','content','organizer','players','isActive','createdAt','updatedAt']);

export default BingoGameScalarFieldEnumSchema;
