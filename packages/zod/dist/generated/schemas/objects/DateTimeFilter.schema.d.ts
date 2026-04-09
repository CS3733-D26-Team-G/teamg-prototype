import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const DateTimeFilterObjectSchema: z.ZodType<Prisma.DateTimeFilter>;
export declare const DateTimeFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodDate>;
    in: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    notIn: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodDate>, z.ZodArray<z.ZodString>]>>;
    lt: z.ZodOptional<z.ZodDate>;
    lte: z.ZodOptional<z.ZodDate>;
    gt: z.ZodOptional<z.ZodDate>;
    gte: z.ZodOptional<z.ZodDate>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodDate, z.ZodLazy<z.ZodType<Prisma.NestedDateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedDateTimeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=DateTimeFilter.schema.d.ts.map