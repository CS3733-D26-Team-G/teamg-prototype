import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedEnumPositionFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionFilter>;
export declare const NestedEnumPositionFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumPositionFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumPositionFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedEnumPositionFilter.schema.d.ts.map