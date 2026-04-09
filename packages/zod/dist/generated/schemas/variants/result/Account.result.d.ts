import * as z from 'zod';
export declare const AccountResultSchema: z.ZodObject<{
    employee: z.ZodUnknown;
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
export type AccountResultType = z.infer<typeof AccountResultSchema>;
//# sourceMappingURL=Account.result.d.ts.map