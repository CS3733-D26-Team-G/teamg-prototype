import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { PositionSchema } from '../enums/Position.schema.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts'

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
  corporate_email: z.string()
}).strict();
export const EmployeeCreateManyInputObjectSchema: z.ZodType<Prisma.EmployeeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeCreateManyInput>;
export const EmployeeCreateManyInputObjectZodSchema = makeSchema();
