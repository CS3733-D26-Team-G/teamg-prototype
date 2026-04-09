import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
import { ContentCountOrderByAggregateInputObjectSchema as ContentCountOrderByAggregateInputObjectSchema } from "./ContentCountOrderByAggregateInput.schema.js";
import { ContentMaxOrderByAggregateInputObjectSchema as ContentMaxOrderByAggregateInputObjectSchema } from "./ContentMaxOrderByAggregateInput.schema.js";
import { ContentMinOrderByAggregateInputObjectSchema as ContentMinOrderByAggregateInputObjectSchema } from "./ContentMinOrderByAggregateInput.schema.js";
const makeSchema = () => z.object({
    uuid: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    url: SortOrderSchema.optional(),
    content_owner: SortOrderSchema.optional(),
    for_position: SortOrderSchema.optional(),
    last_modified_time: SortOrderSchema.optional(),
    expiration_time: SortOrderSchema.optional(),
    content_type: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    _count: z.lazy(() => ContentCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ContentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ContentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContentOrderByWithAggregationInputObjectSchema = makeSchema();
export const ContentOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentOrderByWithAggregationInput.schema.js.map