import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { EmployeeArgsObjectSchema as EmployeeArgsObjectSchema } from './EmployeeArgs.schema.ts'

const makeSchema = () => z.object({
  employee: z.union([z.boolean(), z.lazy(() => EmployeeArgsObjectSchema)]).optional(),
  employeeUuid: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  type: z.boolean().optional()
}).strict();
export const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.AccountSelect>;
export const AccountSelectObjectZodSchema = makeSchema();
