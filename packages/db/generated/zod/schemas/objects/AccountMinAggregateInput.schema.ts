import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';


const makeSchema = () => z.object({
  employeeUuid: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountMinAggregateInputType>;
export const AccountMinAggregateInputObjectZodSchema = makeSchema();
