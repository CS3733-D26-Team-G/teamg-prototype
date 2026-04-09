import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput>;
export declare const EmployeeOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
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
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeOrderByWithAggregationInput.schema.d.ts.map