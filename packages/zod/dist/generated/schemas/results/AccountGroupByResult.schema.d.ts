import * as z from 'zod';
export declare const AccountGroupByResultSchema: z.ZodArray<z.ZodObject<{
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    _count: z.ZodOptional<z.ZodObject<{
        employee: z.ZodNumber;
        employeeUuid: z.ZodNumber;
        username: z.ZodNumber;
        password: z.ZodNumber;
        type: z.ZodNumber;
    }, z.core.$strip>>;
    _min: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        employeeUuid: z.ZodNullable<z.ZodString>;
        username: z.ZodNullable<z.ZodString>;
        password: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    _max: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        employeeUuid: z.ZodNullable<z.ZodString>;
        username: z.ZodNullable<z.ZodString>;
        password: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>>;
//# sourceMappingURL=AccountGroupByResult.schema.d.ts.map