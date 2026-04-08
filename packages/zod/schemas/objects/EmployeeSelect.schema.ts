import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './AccountArgs.schema.ts'

const makeSchema = () => z.object({
  uuid: z.boolean().optional(),
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional(),
  accountUsername: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  date_of_birth: z.boolean().optional(),
  position: z.boolean().optional(),
  department: z.boolean().optional(),
  start_date: z.boolean().optional(),
  supervisor: z.boolean().optional(),
  phone_number: z.boolean().optional(),
  personal_email: z.boolean().optional(),
  corporate_email: z.boolean().optional()
}).strict();
export const EmployeeSelectObjectSchema: z.ZodType<Prisma.EmployeeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeSelect>;
export const EmployeeSelectObjectZodSchema = makeSchema();
