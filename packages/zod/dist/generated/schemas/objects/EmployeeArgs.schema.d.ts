import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeArgsObjectSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
export declare const EmployeeArgsObjectZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeArgs.schema.d.ts.map