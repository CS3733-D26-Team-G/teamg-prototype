import * as z from 'zod';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedStringFilterObjectSchema as NestedStringFilterObjectSchema } from "./NestedStringFilter.schema.js";
const nesteduuidwithaggregatesfilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const NestedUuidWithAggregatesFilterObjectSchema = nesteduuidwithaggregatesfilterSchema;
export const NestedUuidWithAggregatesFilterObjectZodSchema = nesteduuidwithaggregatesfilterSchema;
//# sourceMappingURL=NestedUuidWithAggregatesFilter.schema.js.map