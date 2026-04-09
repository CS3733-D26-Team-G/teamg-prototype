import * as z from 'zod';
import { AccountTypeSchema } from "../../enums/AccountType.schema.js";
// prettier-ignore
export const AccountInputSchema = z.object({
    employee: z.unknown(),
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();
//# sourceMappingURL=Account.input.js.map