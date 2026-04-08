import * as z from 'zod';
import { AccountTypeSchema } from '../../enums/AccountType.schema.ts';
// prettier-ignore
export const AccountInputSchema = z.object({
    employee: z.unknown(),
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    type: AccountTypeSchema
}).strict();

export type AccountInputType = z.infer<typeof AccountInputSchema>;
