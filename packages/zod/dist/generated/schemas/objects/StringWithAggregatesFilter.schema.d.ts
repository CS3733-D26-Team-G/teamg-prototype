import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const StringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringWithAggregatesFilter>;
export declare const StringWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodString>;
    in: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    contains: z.ZodOptional<z.ZodString>;
    startsWith: z.ZodOptional<z.ZodString>;
    endsWith: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        default: "default";
        insensitive: "insensitive";
    }>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedStringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=StringWithAggregatesFilter.schema.d.ts.map