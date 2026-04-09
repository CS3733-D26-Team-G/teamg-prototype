import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeUpsertOneSchema: z.ZodType<Prisma.EmployeeUpsertArgs>;
export declare const EmployeeUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateInput, unknown>>, z.ZodType<Prisma.EmployeeUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateInput, unknown>>, z.ZodType<Prisma.EmployeeUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneEmployee.schema.d.ts.map