import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumAccountTypeFilterObjectSchema: z.ZodType<Prisma.EnumAccountTypeFilter>;
export declare const EnumAccountTypeFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumAccountTypeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumAccountTypeFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumAccountTypeFilter.schema.d.ts.map