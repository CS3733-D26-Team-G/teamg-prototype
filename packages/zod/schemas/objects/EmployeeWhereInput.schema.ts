import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema.ts';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema.ts';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema.ts';
import { EnumPositionFilterObjectSchema as EnumPositionFilterObjectSchema } from './EnumPositionFilter.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { EnumDepartmentFilterObjectSchema as EnumDepartmentFilterObjectSchema } from './EnumDepartmentFilter.schema.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { AccountNullableScalarRelationFilterObjectSchema as AccountNullableScalarRelationFilterObjectSchema } from './AccountNullableScalarRelationFilter.schema.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema.ts'

const employeewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EmployeeWhereInputObjectSchema), z.lazy(() => EmployeeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmployeeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmployeeWhereInputObjectSchema), z.lazy(() => EmployeeWhereInputObjectSchema).array()]).optional(),
  uuid: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  accountUsername: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  first_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  last_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date_of_birth: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  position: z.union([z.lazy(() => EnumPositionFilterObjectSchema), PositionSchema]).optional(),
  department: z.union([z.lazy(() => EnumDepartmentFilterObjectSchema), DepartmentSchema]).optional(),
  start_date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  supervisor: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  phone_number: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  personal_email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  corporate_email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  account: z.union([z.lazy(() => AccountNullableScalarRelationFilterObjectSchema), z.lazy(() => AccountWhereInputObjectSchema)]).optional()
}).strict();
export const EmployeeWhereInputObjectSchema: z.ZodType<Prisma.EmployeeWhereInput> = employeewhereinputSchema as unknown as z.ZodType<Prisma.EmployeeWhereInput>;
export const EmployeeWhereInputObjectZodSchema = employeewhereinputSchema;
