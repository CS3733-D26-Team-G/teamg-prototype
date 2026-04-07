import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';


const makeSchema = () => z.object({
  employeeUuid: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  type: z.literal(true).optional()
}).strict();
export const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AccountMaxAggregateInputType>;
export const AccountMaxAggregateInputObjectZodSchema = makeSchema();
