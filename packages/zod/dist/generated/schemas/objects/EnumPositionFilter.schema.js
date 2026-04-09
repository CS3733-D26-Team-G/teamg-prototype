import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from "./NestedEnumPositionFilter.schema.js";
const makeSchema = () => z.object({
    equals: PositionSchema.optional(),
    in: PositionSchema.array().optional(),
    notIn: PositionSchema.array().optional(),
    not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionFilterObjectSchema)]).optional()
}).strict();
export const EnumPositionFilterObjectSchema = makeSchema();
export const EnumPositionFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumPositionFilter.schema.js.map