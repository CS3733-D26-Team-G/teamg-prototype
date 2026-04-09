import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeFindUniqueOrThrowSchema: z.ZodType<Prisma.EmployeeFindUniqueOrThrowArgs>;
export declare const EmployeeFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowEmployee.schema.d.ts.map