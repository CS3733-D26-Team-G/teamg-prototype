import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeCreateOneSchema: z.ZodType<Prisma.EmployeeCreateArgs>;
export declare const EmployeeCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateInput, unknown>>, z.ZodType<Prisma.EmployeeUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneEmployee.schema.d.ts.map