import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
import { NestedEnumAccountTypeFilterObjectSchema as NestedEnumAccountTypeFilterObjectSchema } from "./NestedEnumAccountTypeFilter.schema.js";
const makeSchema = () => z.object({
    equals: AccountTypeSchema.optional(),
    in: AccountTypeSchema.array().optional(),
    notIn: AccountTypeSchema.array().optional(),
    not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumAccountTypeFilterObjectSchema = makeSchema();
export const EnumAccountTypeFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumAccountTypeFilter.schema.js.map