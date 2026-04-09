import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumContentStatusFilterObjectSchema: z.ZodType<Prisma.EnumContentStatusFilter>;
export declare const EnumContentStatusFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumContentStatusFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentStatusFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumContentStatusFilter.schema.d.ts.map