import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput>;
export declare const AccountScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountScalarWhereWithAggregatesInput, unknown>>>>]>>;
    employeeUuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.UuidWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.UuidWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    password: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.EnumAccountTypeWithAggregatesFilter<never>, unknown>>>, z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountScalarWhereWithAggregatesInput.schema.d.ts.map