import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter>;
export declare const NestedDateTimeFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodDate>;
    in: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    notIn: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    lt: z.ZodOptional<z.ZodDate>;
    lte: z.ZodOptional<z.ZodDate>;
    gt: z.ZodOptional<z.ZodDate>;
    gte: z.ZodOptional<z.ZodDate>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodDate, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedDateTimeFilter.schema.d.ts.map