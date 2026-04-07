import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts'

const nestedenumdepartmentfilterSchema = z.object({
  equals: DepartmentSchema.optional(),
  in: DepartmentSchema.array().optional(),
  notIn: DepartmentSchema.array().optional(),
  not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDepartmentFilterObjectSchema: z.ZodType<Prisma.NestedEnumDepartmentFilter> = nestedenumdepartmentfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDepartmentFilter>;
export const NestedEnumDepartmentFilterObjectZodSchema = nestedenumdepartmentfilterSchema;
