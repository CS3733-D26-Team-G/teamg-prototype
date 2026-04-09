import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput>;
export declare const AccountCountOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
}, z.core.$strict>;
//# sourceMappingURL=AccountCountOrderByAggregateInput.schema.d.ts.map