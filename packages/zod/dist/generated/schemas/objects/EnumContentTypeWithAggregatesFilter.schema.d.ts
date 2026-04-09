import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumContentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumContentTypeWithAggregatesFilter>;
export declare const EnumContentTypeWithAggregatesFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumContentTypeWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentTypeWithAggregatesFilter<never>, unknown>>>]>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedIntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedIntFilter<never>, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumContentTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentTypeFilter<never>, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NestedEnumContentTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentTypeFilter<never>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumContentTypeWithAggregatesFilter.schema.d.ts.map