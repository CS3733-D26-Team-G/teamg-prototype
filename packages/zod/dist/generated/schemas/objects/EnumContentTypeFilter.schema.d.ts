import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumContentTypeFilterObjectSchema: z.ZodType<Prisma.EnumContentTypeFilter>;
export declare const EnumContentTypeFilterObjectZodSchema: z.ZodObject<{
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
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumContentTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumContentTypeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumContentTypeFilter.schema.d.ts.map