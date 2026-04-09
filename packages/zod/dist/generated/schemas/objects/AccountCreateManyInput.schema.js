import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const makeSchema = () => z.object({
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();
export const AccountCreateManyInputObjectSchema = makeSchema();
export const AccountCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateManyInput.schema.js.map