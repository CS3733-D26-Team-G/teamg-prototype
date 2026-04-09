import * as z from 'zod';
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { NestedEnumContentTypeWithAggregatesFilterObjectSchema as NestedEnumContentTypeWithAggregatesFilterObjectSchema } from "./NestedEnumContentTypeWithAggregatesFilter.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumContentTypeFilterObjectSchema as NestedEnumContentTypeFilterObjectSchema } from "./NestedEnumContentTypeFilter.schema.js";
const makeSchema = () => z.object({
    equals: ContentTypeSchema.optional(),
    in: ContentTypeSchema.array().optional(),
    notIn: ContentTypeSchema.array().optional(),
    not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumContentTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumContentTypeFilterObjectSchema).optional()
}).strict();
export const EnumContentTypeWithAggregatesFilterObjectSchema = makeSchema();
export const EnumContentTypeWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentTypeWithAggregatesFilter.schema.js.map