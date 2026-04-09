import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export declare const AccountOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    username: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    password: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    type: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    employee: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountOrderByWithRelationInput.schema.d.ts.map