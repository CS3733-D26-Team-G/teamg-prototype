import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput>;
export declare const EmployeeOrderByWithRelationInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    first_name: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    last_name: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    date_of_birth: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    position: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    department: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    start_date: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    supervisor: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    phone_number: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    personal_email: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    corporate_email: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    account: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeOrderByWithRelationInput.schema.d.ts.map