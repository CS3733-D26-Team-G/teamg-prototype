import * as z from 'zod';
export declare const AccountModelSchema: z.ZodObject<{
    employee: z.ZodUnknown;
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
export type AccountPureType = z.infer<typeof AccountModelSchema>;
//# sourceMappingURL=Account.pure.d.ts.map