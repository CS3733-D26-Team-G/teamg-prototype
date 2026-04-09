import * as z from 'zod';
export const AccountGroupByResultSchema = z.array(z.object({
    employeeUuid: z.string(),
    username: z.string(),
    password: z.string(),
    _count: z.object({
        employee: z.number(),
        employeeUuid: z.number(),
        username: z.number(),
        password: z.number(),
        type: z.number()
    }).optional(),
    _min: z.object({
        employeeUuid: z.string().nullable(),
        username: z.string().nullable(),
        password: z.string().nullable()
    }).nullable().optional(),
    _max: z.object({
        employeeUuid: z.string().nullable(),
        username: z.string().nullable(),
        password: z.string().nullable()
    }).nullable().optional()
}));
//# sourceMappingURL=AccountGroupByResult.schema.js.map