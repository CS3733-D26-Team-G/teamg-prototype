import * as z from 'zod';
import { DepartmentSchema } from "../enums/Department.schema.js";
import { NestedEnumDepartmentWithAggregatesFilterObjectSchema as NestedEnumDepartmentWithAggregatesFilterObjectSchema } from "./NestedEnumDepartmentWithAggregatesFilter.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumDepartmentFilterObjectSchema as NestedEnumDepartmentFilterObjectSchema } from "./NestedEnumDepartmentFilter.schema.js";
const makeSchema = () => z.object({
    equals: DepartmentSchema.optional(),
    in: DepartmentSchema.array().optional(),
    notIn: DepartmentSchema.array().optional(),
    not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumDepartmentFilterObjectSchema).optional()
}).strict();
export const EnumDepartmentWithAggregatesFilterObjectSchema = makeSchema();
export const EnumDepartmentWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumDepartmentWithAggregatesFilter.schema.js.map