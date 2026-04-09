import * as z from 'zod';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./EmployeeWhereInput.schema.js";
const makeSchema = () => z.object({
    is: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => EmployeeWhereInputObjectSchema).optional()
}).strict();
export const EmployeeScalarRelationFilterObjectSchema = makeSchema();
export const EmployeeScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeScalarRelationFilter.schema.js.map