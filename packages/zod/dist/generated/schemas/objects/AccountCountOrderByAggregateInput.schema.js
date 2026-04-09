import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
const makeSchema = () => z.object({
    employeeUuid: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    password: SortOrderSchema.optional(),
    type: SortOrderSchema.optional()
}).strict();
export const AccountCountOrderByAggregateInputObjectSchema = makeSchema();
export const AccountCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCountOrderByAggregateInput.schema.js.map