import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput>;
export declare const EmployeeScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeScalarWhereWithAggregatesInput, unknown>>>>]>>;
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    first_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    last_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    date_of_birth: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    position: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumPositionWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>]>>;
    department: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumDepartmentWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumDepartmentWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>]>>;
    start_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeWithAggregatesFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    supervisor: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    phone_number: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    personal_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    corporate_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeScalarWhereWithAggregatesInput.schema.d.ts.map