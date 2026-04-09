import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedEnumContentStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumContentStatusWithAggregatesFilter>;
export declare const NestedEnumContentStatusWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumContentStatusWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentStatusWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumContentStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentStatusFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumContentStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentStatusFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumContentStatusWithAggregatesFilter.schema.d.ts.map