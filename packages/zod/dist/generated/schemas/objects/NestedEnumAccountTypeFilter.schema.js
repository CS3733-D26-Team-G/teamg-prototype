import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const nestedenumaccounttypefilterSchema = z.object({
    equals: AccountTypeSchema.optional(),
    in: AccountTypeSchema.array().optional(),
    notIn: AccountTypeSchema.array().optional(),
    not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAccountTypeFilterObjectSchema = nestedenumaccounttypefilterSchema;
export const NestedEnumAccountTypeFilterObjectZodSchema = nestedenumaccounttypefilterSchema;
//# sourceMappingURL=NestedEnumAccountTypeFilter.schema.js.map