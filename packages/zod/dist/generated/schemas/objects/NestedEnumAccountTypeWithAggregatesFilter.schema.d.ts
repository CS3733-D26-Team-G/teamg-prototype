import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedEnumAccountTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter>;
export declare const NestedEnumAccountTypeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumAccountTypeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumAccountTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumAccountTypeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumAccountTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumAccountTypeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumAccountTypeWithAggregatesFilter.schema.d.ts.map