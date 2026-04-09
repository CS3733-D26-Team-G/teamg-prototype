import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeUpdateOneSchema: z.ZodType<Prisma.EmployeeUpdateArgs>;
export declare const EmployeeUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateInput, unknown>>, z.ZodType<Prisma.EmployeeUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneEmployee.schema.d.ts.map