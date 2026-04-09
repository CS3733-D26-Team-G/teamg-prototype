import * as z from 'zod';
const nesteduuidfilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)]).optional()
}).strict();
export const NestedUuidFilterObjectSchema = nesteduuidfilterSchema;
export const NestedUuidFilterObjectZodSchema = nesteduuidfilterSchema;
//# sourceMappingURL=NestedUuidFilter.schema.js.map