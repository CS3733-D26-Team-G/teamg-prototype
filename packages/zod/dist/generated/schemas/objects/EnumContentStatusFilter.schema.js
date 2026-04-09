import * as z from 'zod';
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
import { NestedEnumContentStatusFilterObjectSchema as NestedEnumContentStatusFilterObjectSchema } from "./NestedEnumContentStatusFilter.schema.js";
const makeSchema = () => z.object({
    equals: ContentStatusSchema.optional(),
    in: ContentStatusSchema.array().optional(),
    notIn: ContentStatusSchema.array().optional(),
    not: z.union([ContentStatusSchema, z.lazy(() => NestedEnumContentStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumContentStatusFilterObjectSchema = makeSchema();
export const EnumContentStatusFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentStatusFilter.schema.js.map