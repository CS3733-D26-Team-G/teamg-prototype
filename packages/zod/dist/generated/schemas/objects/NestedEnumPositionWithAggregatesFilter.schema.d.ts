import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedEnumPositionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionWithAggregatesFilter>;
export declare const NestedEnumPositionWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumPositionWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPositionWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumPositionFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPositionFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumPositionFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPositionFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumPositionWithAggregatesFilter.schema.d.ts.map