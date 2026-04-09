import * as z from 'zod';
export declare const AccountTypeSchema: z.ZodEnum<{
    ADMIN: "ADMIN";
    EMPLOYEE: "EMPLOYEE";
}>;
export type AccountType = z.infer<typeof AccountTypeSchema>;
//# sourceMappingURL=AccountType.schema.d.ts.map