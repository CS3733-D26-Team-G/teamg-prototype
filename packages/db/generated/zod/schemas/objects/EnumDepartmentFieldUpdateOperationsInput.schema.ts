import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts'

const makeSchema = () => z.object({
  set: DepartmentSchema.optional()
}).strict();
export const EnumDepartmentFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput>;
export const EnumDepartmentFieldUpdateOperationsInputObjectZodSchema = makeSchema();
