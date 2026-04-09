import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumDepartmentFilterObjectSchema: z.ZodType<Prisma.EnumDepartmentFilter>;
export declare const EnumDepartmentFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodOptional<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>;
    in: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>>;
    notIn: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>>;
    not: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>, z.ZodLazy<z.ZodType<Prisma.NestedEnumDepartmentFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.NestedEnumDepartmentFilter<never>, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumDepartmentFilter.schema.d.ts.map