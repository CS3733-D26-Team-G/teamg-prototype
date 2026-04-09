import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeWhereInputObjectSchema: z.ZodType<Prisma.EmployeeWhereInput>;
export declare const EmployeeWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>]>>;
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidFilter<never>, unknown>>>, z.ZodString]>>;
    first_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    last_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    date_of_birth: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    position: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumPositionFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>]>>;
    department: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumDepartmentFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumDepartmentFilter<never>, unknown>>>, z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>]>>;
    start_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    supervisor: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    phone_number: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    personal_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    corporate_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    account: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountNullableScalarRelationFilter, unknown, z.core.$ZodTypeInternals<Prisma.AccountNullableScalarRelationFilter, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeWhereInput.schema.d.ts.map