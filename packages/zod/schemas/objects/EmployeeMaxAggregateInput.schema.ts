import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.literal(true).optional(),
  accountUsername: z.literal(true).optional(),
  first_name: z.literal(true).optional(),
  last_name: z.literal(true).optional(),
  date_of_birth: z.literal(true).optional(),
  position: z.literal(true).optional(),
  department: z.literal(true).optional(),
  start_date: z.literal(true).optional(),
  supervisor: z.literal(true).optional(),
  phone_number: z.literal(true).optional(),
  personal_email: z.literal(true).optional(),
  corporate_email: z.literal(true).optional()
}).strict();
export const EmployeeMaxAggregateInputObjectSchema: z.ZodType<Prisma.EmployeeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeMaxAggregateInputType>;
export const EmployeeMaxAggregateInputObjectZodSchema = makeSchema();
