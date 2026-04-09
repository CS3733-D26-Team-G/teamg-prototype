import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
const makeSchema = () => z.object({
    uuid: SortOrderSchema.optional(),
    title: SortOrderSchema.optional(),
    url: SortOrderSchema.optional(),
    content_owner: SortOrderSchema.optional(),
    for_position: SortOrderSchema.optional(),
    last_modified_time: SortOrderSchema.optional(),
    expiration_time: SortOrderSchema.optional(),
    content_type: SortOrderSchema.optional(),
    status: SortOrderSchema.optional()
}).strict();
export const ContentCountOrderByAggregateInputObjectSchema = makeSchema();
export const ContentCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentCountOrderByAggregateInput.schema.js.map