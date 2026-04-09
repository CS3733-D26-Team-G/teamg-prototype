import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { AccountCreateNestedOneWithoutEmployeeInputObjectSchema as AccountCreateNestedOneWithoutEmployeeInputObjectSchema } from './AccountCreateNestedOneWithoutEmployeeInput.schema.ts'

const makeSchema = () => z.object({
  uuid: z.string().optional(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.coerce.date(),
  position: PositionSchema,
  department: DepartmentSchema,
  start_date: z.coerce.date(),
  supervisor: z.string(),
  phone_number: z.string(),
  personal_email: z.string(),
  corporate_email: z.string(),
  account: z.lazy(() => AccountCreateNestedOneWithoutEmployeeInputObjectSchema).optional()
}).strict();
export const EmployeeCreateInputObjectSchema: z.ZodType<Prisma.EmployeeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeCreateInput>;
export const EmployeeCreateInputObjectZodSchema = makeSchema();
