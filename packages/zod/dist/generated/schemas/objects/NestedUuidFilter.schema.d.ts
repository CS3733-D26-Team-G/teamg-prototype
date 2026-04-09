import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedUuidFilterObjectSchema: z.ZodType<Prisma.NestedUuidFilter>;
export declare const NestedUuidFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodString>;
    in: z.ZodOptional<z.ZodArray<z.ZodString>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodString>>;
    lt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedUuidFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedUuidFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedUuidFilter.schema.d.ts.map