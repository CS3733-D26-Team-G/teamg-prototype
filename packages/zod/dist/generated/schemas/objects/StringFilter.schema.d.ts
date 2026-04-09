import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const StringFilterObjectSchema: z.ZodType<Prisma.StringFilter>;
export declare const StringFilterObjectZodSchema: z.ZodObject<{
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
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.NestedStringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedStringFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=StringFilter.schema.d.ts.map