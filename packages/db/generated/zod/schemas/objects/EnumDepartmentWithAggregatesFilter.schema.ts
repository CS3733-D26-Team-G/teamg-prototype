import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { DepartmentSchema } from '../enums/Department.schema.ts';
import { NestedEnumDepartmentWithAggregatesFilterObjectSchema as NestedEnumDepartmentWithAggregatesFilterObjectSchema } from './NestedEnumDepartmentWithAggregatesFilter.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumDepartmentFilterObjectSchema as NestedEnumDepartmentFilterObjectSchema } from './NestedEnumDepartmentFilter.schema.ts'

const makeSchema = () => z.object({
  equals: DepartmentSchema.optional(),
  in: DepartmentSchema.array().optional(),
  notIn: DepartmentSchema.array().optional(),
  not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional()
}).strict();
export const EnumDepartmentWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumDepartmentWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDepartmentWithAggregatesFilter>;
export const EnumDepartmentWithAggregatesFilterObjectZodSchema = makeSchema();
