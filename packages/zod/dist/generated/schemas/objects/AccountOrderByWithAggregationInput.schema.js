import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
import { AccountCountOrderByAggregateInputObjectSchema as AccountCountOrderByAggregateInputObjectSchema } from "./AccountCountOrderByAggregateInput.schema.js";
import { AccountMaxOrderByAggregateInputObjectSchema as AccountMaxOrderByAggregateInputObjectSchema } from "./AccountMaxOrderByAggregateInput.schema.js";
import { AccountMinOrderByAggregateInputObjectSchema as AccountMinOrderByAggregateInputObjectSchema } from "./AccountMinOrderByAggregateInput.schema.js";
const makeSchema = () => z.object({
    employeeUuid: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    password: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    _count: z.lazy(() => AccountCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithAggregationInputObjectSchema = makeSchema();
export const AccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountOrderByWithAggregationInput.schema.js.map