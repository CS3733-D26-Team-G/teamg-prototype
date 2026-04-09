import * as z from 'zod';
export declare const AccountFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        employee: z.ZodUnknown;
        employeeUuid: z.ZodString;
        username: z.ZodString;
        password: z.ZodString;
        type: z.ZodUnknown;
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
//# sourceMappingURL=AccountFindManyResult.schema.d.ts.map