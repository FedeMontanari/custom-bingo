import { z } from 'zod';

export const CardStateScalarFieldEnumSchema = z.enum(['id','content','marked','cardId','createdAt','updatedAt']);

export default CardStateScalarFieldEnumSchema;
