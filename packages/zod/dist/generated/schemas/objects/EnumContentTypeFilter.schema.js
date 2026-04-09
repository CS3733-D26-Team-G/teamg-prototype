import * as z from 'zod';
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { NestedEnumContentTypeFilterObjectSchema as NestedEnumContentTypeFilterObjectSchema } from "./NestedEnumContentTypeFilter.schema.js";
const makeSchema = () => z.object({
    equals: ContentTypeSchema.optional(),
    in: ContentTypeSchema.array().optional(),
    notIn: ContentTypeSchema.array().optional(),
    not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumContentTypeFilterObjectSchema = makeSchema();
export const EnumContentTypeFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentTypeFilter.schema.js.map