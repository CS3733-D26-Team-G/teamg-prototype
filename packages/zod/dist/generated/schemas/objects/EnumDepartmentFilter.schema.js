import * as z from 'zod';
import { DepartmentSchema } from "../enums/Department.schema.js";
import { NestedEnumDepartmentFilterObjectSchema as NestedEnumDepartmentFilterObjectSchema } from "./NestedEnumDepartmentFilter.schema.js";
const makeSchema = () => z.object({
    equals: DepartmentSchema.optional(),
    in: DepartmentSchema.array().optional(),
    notIn: DepartmentSchema.array().optional(),
    not: z.union([DepartmentSchema, z.lazy(() => NestedEnumDepartmentFilterObjectSchema)]).optional()
}).strict();
export const EnumDepartmentFilterObjectSchema = makeSchema();
export const EnumDepartmentFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumDepartmentFilter.schema.js.map