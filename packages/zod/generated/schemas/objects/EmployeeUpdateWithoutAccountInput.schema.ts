import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { EnumPositionFieldUpdateOperationsInputObjectSchema as EnumPositionFieldUpdateOperationsInputObjectSchema } from './EnumPositionFieldUpdateOperationsInput.schema.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { EnumDepartmentFieldUpdateOperationsInputObjectSchema as EnumDepartmentFieldUpdateOperationsInputObjectSchema } from './EnumDepartmentFieldUpdateOperationsInput.schema.ts'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  first_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  date_of_birth: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  position: z.union([PositionSchema, z.lazy(() => EnumPositionFieldUpdateOperationsInputObjectSchema)]).optional(),
  department: z.union([DepartmentSchema, z.lazy(() => EnumDepartmentFieldUpdateOperationsInputObjectSchema)]).optional(),
  start_date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  supervisor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  personal_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  corporate_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const EmployeeUpdateWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput>;
export const EmployeeUpdateWithoutAccountInputObjectZodSchema = makeSchema();
