import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
import { EmployeeCreateNestedOneWithoutAccountInputObjectSchema as EmployeeCreateNestedOneWithoutAccountInputObjectSchema } from "./EmployeeCreateNestedOneWithoutAccountInput.schema.js";
const makeSchema = () => z.object({
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema,
    employee: z.lazy(() => EmployeeCreateNestedOneWithoutAccountInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema = makeSchema();
export const AccountCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateInput.schema.js.map