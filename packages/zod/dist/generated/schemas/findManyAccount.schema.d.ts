import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountFindManySelectSchema: z.ZodType<Prisma.AccountSelect>;
export declare const AccountFindManySelectZodSchema: z.ZodObject<{
    employee: z.ZodOptional<z.ZodBoolean>;
    employeeUuid: z.ZodOptional<z.ZodBoolean>;
    username: z.ZodOptional<z.ZodBoolean>;
    password: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const AccountFindManySchema: z.ZodType<Prisma.AccountFindManyArgs>;
export declare const AccountFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        employeeUuid: "employeeUuid";
        username: "username";
        password: "password";
        type: "type";
    }>, z.ZodArray<z.ZodEnum<{
        employeeUuid: "employeeUuid";
        username: "username";
        password: "password";
        type: "type";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyAccount.schema.d.ts.map