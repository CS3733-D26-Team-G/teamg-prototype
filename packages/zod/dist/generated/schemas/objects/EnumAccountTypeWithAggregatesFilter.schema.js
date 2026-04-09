import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
import { NestedEnumAccountTypeWithAggregatesFilterObjectSchema as NestedEnumAccountTypeWithAggregatesFilterObjectSchema } from "./NestedEnumAccountTypeWithAggregatesFilter.schema.js";
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from "./NestedIntFilter.schema.js";
import { NestedEnumAccountTypeFilterObjectSchema as NestedEnumAccountTypeFilterObjectSchema } from "./NestedEnumAccountTypeFilter.schema.js";
const makeSchema = () => z.object({
    equals: AccountTypeSchema.optional(),
    in: AccountTypeSchema.array().optional(),
    notIn: AccountTypeSchema.array().optional(),
    not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterObjectSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional()
}).strict();
export const EnumAccountTypeWithAggregatesFilterObjectSchema = makeSchema();
export const EnumAccountTypeWithAggregatesFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumAccountTypeWithAggregatesFilter.schema.js.map