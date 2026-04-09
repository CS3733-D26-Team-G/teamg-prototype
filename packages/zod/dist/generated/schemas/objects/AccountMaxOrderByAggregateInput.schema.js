import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
const makeSchema = () => z.object({
    employeeUuid: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    password: SortOrderSchema.optional(),
    type: SortOrderSchema.optional()
}).strict();
export const AccountMaxOrderByAggregateInputObjectSchema = makeSchema();
export const AccountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountMaxOrderByAggregateInput.schema.js.map