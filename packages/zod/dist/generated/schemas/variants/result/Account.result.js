import * as z from 'zod';
import { AccountTypeSchema } from "../../enums/AccountType.schema.js";
// prettier-ignore
export const AccountResultSchema = z.object({
    employee: z.unknown(),
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();
//# sourceMappingURL=Account.result.js.map