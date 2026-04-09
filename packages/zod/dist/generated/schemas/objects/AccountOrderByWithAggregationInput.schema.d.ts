import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput>;
export declare const AccountOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
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
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountOrderByWithAggregationInput.schema.d.ts.map