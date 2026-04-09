import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedUuidWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter>;
export declare const NestedUuidWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodString>;
    in: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedUuidWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedUuidWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedStringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedUuidWithAggregatesFilter.schema.d.ts.map