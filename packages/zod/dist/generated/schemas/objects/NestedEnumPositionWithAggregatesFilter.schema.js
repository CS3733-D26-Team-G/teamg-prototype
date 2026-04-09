import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from "./NestedEnumPositionFilter.schema.js";
const nestedenumpositionwithaggregatesfilterSchema = z.object({
    equals: PositionSchema.optional(),
    in: PositionSchema.array().optional(),
    notIn: PositionSchema.array().optional(),
    not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional()
}).strict();
export const NestedEnumPositionWithAggregatesFilterObjectSchema = nestedenumpositionwithaggregatesfilterSchema;
export const NestedEnumPositionWithAggregatesFilterObjectZodSchema = nestedenumpositionwithaggregatesfilterSchema;
//# sourceMappingURL=NestedEnumPositionWithAggregatesFilter.schema.js.map