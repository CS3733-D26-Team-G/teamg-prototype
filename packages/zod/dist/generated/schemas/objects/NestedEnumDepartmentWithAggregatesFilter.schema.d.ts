import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedEnumDepartmentWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumDepartmentWithAggregatesFilter>;
export declare const NestedEnumDepartmentWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumDepartmentWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumDepartmentWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumDepartmentFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumDepartmentFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumDepartmentFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumDepartmentFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumDepartmentWithAggregatesFilter.schema.d.ts.map