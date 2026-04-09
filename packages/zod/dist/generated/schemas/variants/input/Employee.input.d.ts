import * as z from 'zod';
export declare const EmployeeInputSchema: z.ZodObject<{
    uuid: z.ZodString;
    account: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    first_name: z.ZodString;
    last_name: z.ZodString;
    date_of_birth: z.ZodDate;
    position: z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>;
    department: z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>;
    start_date: z.ZodDate;
    supervisor: z.ZodString;
    phone_number: z.ZodString;
    personal_email: z.ZodString;
    corporate_email: z.ZodString;
}, z.core.$strict>;
export type EmployeeInputType = z.infer<typeof EmployeeInputSchema>;
//# sourceMappingURL=Employee.input.d.ts.map