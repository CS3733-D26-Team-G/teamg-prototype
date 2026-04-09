import * as z from 'zod';
export declare const DepartmentSchema: z.ZodEnum<{
    OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
    ACCOUNTING: "ACCOUNTING";
}>;
export type Department = z.infer<typeof DepartmentSchema>;
//# sourceMappingURL=Department.schema.d.ts.map