import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput>;
export declare const AccountWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>]>>;
    employeeUuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidFilter<never>, unknown>>>, z.ZodString]>>;
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    password: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumAccountTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumAccountTypeFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>]>>;
    employee: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountWhereInput.schema.d.ts.map