import * as z from 'zod';
import { DepartmentSchema } from "../enums/Department.schema.js";
const nestedenumdepartmentfilterSchema = z.object({
    equals: DepartmentSchema.optional(),
    in: DepartmentSchema.array().optional(),
    notIn: DepartmentSchema.array().optional(),
    not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDepartmentFilterObjectSchema = nestedenumdepartmentfilterSchema;
export const NestedEnumDepartmentFilterObjectZodSchema = nestedenumdepartmentfilterSchema;
//# sourceMappingURL=NestedEnumDepartmentFilter.schema.js.map