import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
import { EmployeeCountOrderByAggregateInputObjectSchema as EmployeeCountOrderByAggregateInputObjectSchema } from "./EmployeeCountOrderByAggregateInput.schema.js";
import { EmployeeMaxOrderByAggregateInputObjectSchema as EmployeeMaxOrderByAggregateInputObjectSchema } from "./EmployeeMaxOrderByAggregateInput.schema.js";
import { EmployeeMinOrderByAggregateInputObjectSchema as EmployeeMinOrderByAggregateInputObjectSchema } from "./EmployeeMinOrderByAggregateInput.schema.js";
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
    corporate_email: SortOrderSchema.optional(),
    _count: z.lazy(() => EmployeeCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EmployeeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmployeeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EmployeeOrderByWithAggregationInputObjectSchema = makeSchema();
export const EmployeeOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeOrderByWithAggregationInput.schema.js.map