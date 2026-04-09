import * as z from 'zod';
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
import { NestedEnumContentStatusWithAggregatesFilterObjectSchema as NestedEnumContentStatusWithAggregatesFilterObjectSchema } from "./NestedEnumContentStatusWithAggregatesFilter.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumContentStatusFilterObjectSchema as NestedEnumContentStatusFilterObjectSchema } from "./NestedEnumContentStatusFilter.schema.js";
const makeSchema = () => z.object({
    equals: ContentStatusSchema.optional(),
    in: ContentStatusSchema.array().optional(),
    notIn: ContentStatusSchema.array().optional(),
    not: z.union([ContentStatusSchema, z.lazy(() => NestedEnumContentStatusWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumContentStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumContentStatusFilterObjectSchema).optional()
}).strict();
export const EnumContentStatusWithAggregatesFilterObjectSchema = makeSchema();
export const EnumContentStatusWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentStatusWithAggregatesFilter.schema.js.map