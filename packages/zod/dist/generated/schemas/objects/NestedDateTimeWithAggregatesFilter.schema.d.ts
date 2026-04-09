import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export declare const NestedDateTimeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodDate>;
    in: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    notIn: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    lt: z.ZodOptional<z.ZodDate>;
    lte: z.ZodOptional<z.ZodDate>;
    gt: z.ZodOptional<z.ZodDate>;
    gte: z.ZodOptional<z.ZodDate>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodDate, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeWithAggregatesFilter.schema.d.ts.map