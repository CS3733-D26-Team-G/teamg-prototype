import * as z from 'zod';
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
const nestedenumcontenttypefilterSchema = z.object({
    equals: ContentTypeSchema.optional(),
    in: ContentTypeSchema.array().optional(),
    notIn: ContentTypeSchema.array().optional(),
    not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumContentTypeFilterObjectSchema = nestedenumcontenttypefilterSchema;
export const NestedEnumContentTypeFilterObjectZodSchema = nestedenumcontenttypefilterSchema;
//# sourceMappingURL=NestedEnumContentTypeFilter.schema.js.map