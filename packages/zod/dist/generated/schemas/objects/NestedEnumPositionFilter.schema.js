import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
const nestedenumpositionfilterSchema = z.object({
    equals: PositionSchema.optional(),
    in: PositionSchema.array().optional(),
    notIn: PositionSchema.array().optional(),
    not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPositionFilterObjectSchema = nestedenumpositionfilterSchema;
export const NestedEnumPositionFilterObjectZodSchema = nestedenumpositionfilterSchema;
//# sourceMappingURL=NestedEnumPositionFilter.schema.js.map