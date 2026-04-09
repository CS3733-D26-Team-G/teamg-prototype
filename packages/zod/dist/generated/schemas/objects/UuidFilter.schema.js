import * as z from 'zod';
import { QueryModeSchema } from "../enums/QueryMode.schema.js";
import { NestedUuidFilterObjectSchema as NestedUuidFilterObjectSchema } from "./NestedUuidFilter.schema.js";
const makeSchema = () => z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: QueryModeSchema.optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterObjectSchema)]).optional()
}).strict();
export const UuidFilterObjectSchema = makeSchema();
export const UuidFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=UuidFilter.schema.js.map