import * as z from 'zod';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema.js";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.js";
import { EnumAccountTypeWithAggregatesFilterObjectSchema as EnumAccountTypeWithAggregatesFilterObjectSchema } from "./EnumAccountTypeWithAggregatesFilter.schema.js";
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const accountscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    employeeUuid: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
    username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumAccountTypeWithAggregatesFilterObjectSchema), AccountTypeSchema]).optional()
}).strict();
export const AccountScalarWhereWithAggregatesInputObjectSchema = accountscalarwherewithaggregatesinputSchema;
export const AccountScalarWhereWithAggregatesInputObjectZodSchema = accountscalarwherewithaggregatesinputSchema;
//# sourceMappingURL=AccountScalarWhereWithAggregatesInput.schema.js.map