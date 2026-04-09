import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { NestedEnumDepartmentFilterObjectSchema as NestedEnumDepartmentFilterObjectSchema } from './NestedEnumDepartmentFilter.schema.ts'

const makeSchema = () => z.object({
  equals: DepartmentSchema.optional(),
  in: DepartmentSchema.array().optional(),
  notIn: DepartmentSchema.array().optional(),
  not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentFilterObjectSchema)]).optional()
}).strict();
export const EnumDepartmentFilterObjectSchema: z.ZodType<Prisma.EnumDepartmentFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDepartmentFilter>;
export const EnumDepartmentFilterObjectZodSchema = makeSchema();
