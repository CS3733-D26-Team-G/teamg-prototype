import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
const makeSchema = () => z.object({
    uuid: SortOrderSchema.optional(),
    first_name: SortOrderSchema.optional(),
    last_name: SortOrderSchema.optional(),
    date_of_birth: SortOrderSchema.optional(),
    position: SortOrderSchema.optional(),
    department: SortOrderSchema.optional(),
    start_date: SortOrderSchema.optional(),
    supervisor: SortOrderSchema.optional(),
    phone_number: SortOrderSchema.optional(),
    personal_email: SortOrderSchema.optional(),
    corporate_email: SortOrderSchema.optional()
}).strict();
export const EmployeeCountOrderByAggregateInputObjectSchema = makeSchema();
export const EmployeeCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeCountOrderByAggregateInput.schema.js.map