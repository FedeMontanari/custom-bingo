import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardStateUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardStateUpdateManyMutationInputSchema'
import { CardStateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardStateUncheckedUpdateManyInputSchema'
import { CardStateWhereInputSchema } from '../inputTypeSchemas/CardStateWhereInputSchema'

export const CardStateUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CardStateUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CardStateUpdateManyMutationInputSchema,CardStateUncheckedUpdateManyInputSchema ]),
  where: CardStateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CardStateUpdateManyAndReturnArgsSchema;
