import * as z from 'zod';
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
const nestedenumcontentstatusfilterSchema = z.object({
    equals: ContentStatusSchema.optional(),
    in: ContentStatusSchema.array().optional(),
    notIn: ContentStatusSchema.array().optional(),
    not: z.union([ContentStatusSchema, z.lazy(() => NestedEnumContentStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumContentStatusFilterObjectSchema = nestedenumcontentstatusfilterSchema;
export const NestedEnumContentStatusFilterObjectZodSchema = nestedenumcontentstatusfilterSchema;
//# sourceMappingURL=NestedEnumContentStatusFilter.schema.js.map