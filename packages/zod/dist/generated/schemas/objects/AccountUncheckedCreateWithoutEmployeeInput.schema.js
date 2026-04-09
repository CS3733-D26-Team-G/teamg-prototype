import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const makeSchema = () => z.object({
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();
export const AccountUncheckedCreateWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountUncheckedCreateWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUncheckedCreateWithoutEmployeeInput.schema.js.map