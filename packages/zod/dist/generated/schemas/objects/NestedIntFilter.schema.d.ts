import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter>;
export declare const NestedIntFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodNumber>;
    in: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    lt: z.ZodOptional<z.ZodNumber>;
    lte: z.ZodOptional<z.ZodNumber>;
    gt: z.ZodOptional<z.ZodNumber>;
    gte: z.ZodOptional<z.ZodNumber>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=NestedIntFilter.schema.d.ts.map