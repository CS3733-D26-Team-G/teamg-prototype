import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
import { NestedEnumPositionWithAggregatesFilterObjectSchema as NestedEnumPositionWithAggregatesFilterObjectSchema } from "./NestedEnumPositionWithAggregatesFilter.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from "./NestedEnumPositionFilter.schema.js";
const makeSchema = () => z.object({
    equals: PositionSchema.optional(),
    in: PositionSchema.array().optional(),
    notIn: PositionSchema.array().optional(),
    not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional()
}).strict();
export const EnumPositionWithAggregatesFilterObjectSchema = makeSchema();
export const EnumPositionWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumPositionWithAggregatesFilter.schema.js.map