import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumDepartmentFilterObjectSchema as NestedEnumDepartmentFilterObjectSchema } from './NestedEnumDepartmentFilter.schema.ts'

const nestedenumdepartmentwithaggregatesfilterSchema = z.object({
  equals: DepartmentSchema.optional(),
  in: DepartmentSchema.array().optional(),
  notIn: DepartmentSchema.array().optional(),
  not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional()
}).strict();
export const NestedEnumDepartmentWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDepartmentWithAggregatesFilter> = nestedenumdepartmentwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDepartmentWithAggregatesFilter>;
export const NestedEnumDepartmentWithAggregatesFilterObjectZodSchema = nestedenumdepartmentwithaggregatesfilterSchema;
