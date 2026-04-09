import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeDeleteOneSchema: z.ZodType<Prisma.EmployeeDeleteArgs>;
export declare const EmployeeDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOneEmployee.schema.d.ts.map