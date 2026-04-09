import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
import { EmployeeOrderByWithRelationInputObjectSchema as EmployeeOrderByWithRelationInputObjectSchema } from "./EmployeeOrderByWithRelationInput.schema.js";
const makeSchema = () => z.object({
    employeeUuid: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    password: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    employee: z.lazy(() => EmployeeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithRelationInputObjectSchema = makeSchema();
export const AccountOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountOrderByWithRelationInput.schema.js.map