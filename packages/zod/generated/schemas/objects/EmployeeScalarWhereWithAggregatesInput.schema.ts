import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema.ts';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema.ts';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema.ts';
import { EnumPositionWithAggregatesFilterObjectSchema as EnumPositionWithAggregatesFilterObjectSchema } from './EnumPositionWithAggregatesFilter.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { EnumDepartmentWithAggregatesFilterObjectSchema as EnumDepartmentWithAggregatesFilterObjectSchema } from './EnumDepartmentWithAggregatesFilter.schema.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts'

const employeescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EmployeeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmployeeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmployeeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmployeeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EmployeeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  uuid: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  first_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  last_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  date_of_birth: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  position: z.union([z.lazy(() => EnumPositionWithAggregatesFilterObjectSchema), PositionSchema]).optional(),
  department: z.union([z.lazy(() => EnumDepartmentWithAggregatesFilterObjectSchema), DepartmentSchema]).optional(),
  start_date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  supervisor: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  phone_number: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  personal_email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  corporate_email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmployeeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput> = employeescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput>;
export const EmployeeScalarWhereWithAggregatesInputObjectZodSchema = employeescalarwherewithaggregatesinputSchema;
