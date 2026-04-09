import * as z from 'zod';
export declare const EmployeeDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    uuid: z.ZodString;
    account: z.ZodOptional<z.ZodUnknown>;
    first_name: z.ZodString;
    last_name: z.ZodString;
    date_of_birth: z.ZodDate;
    position: z.ZodUnknown;
    department: z.ZodUnknown;
    start_date: z.ZodDate;
    supervisor: z.ZodString;
    phone_number: z.ZodString;
    personal_email: z.ZodString;
    corporate_email: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=EmployeeDeleteResult.schema.d.ts.map