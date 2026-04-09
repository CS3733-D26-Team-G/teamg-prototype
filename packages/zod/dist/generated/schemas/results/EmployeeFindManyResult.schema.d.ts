import * as z from 'zod';
export declare const EmployeeFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
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
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=EmployeeFindManyResult.schema.d.ts.map