import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardStateUpdateManyMutationInputSchema'
import { CardStateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardStateUncheckedUpdateManyInputSchema'
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'

export const CardStateUpdateManyArgsSchema: z.ZodType<Prisma.CardStateUpdateManyArgs> = z.object({
  data: z.union([ CardStateUpdateManyMutationInputSchema,CardStateUncheckedUpdateManyInputSchema ]),
  where: CardStateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CardStateUpdateManyArgsSchema;
