import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const makeSchema = () => z.object({
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();
export const AccountCreateWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountCreateWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateWithoutEmployeeInput.schema.js.map