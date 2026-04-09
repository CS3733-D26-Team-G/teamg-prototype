import * as z from 'zod';
export declare const AccountInputSchema: z.ZodObject<{
    employee: z.ZodUnknown;
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
export type AccountInputType = z.infer<typeof AccountInputSchema>;
//# sourceMappingURL=Account.input.d.ts.map