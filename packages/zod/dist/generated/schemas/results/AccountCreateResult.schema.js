import * as z from 'zod';
export const AccountCreateResultSchema = z.object({
    employee: z.unknown(),
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    type: z.unknown()
});
//# sourceMappingURL=AccountCreateResult.schema.js.map