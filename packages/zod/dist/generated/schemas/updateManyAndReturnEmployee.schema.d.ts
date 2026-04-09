import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeUpdateManyAndReturnSchema: z.ZodType<Prisma.EmployeeUpdateManyAndReturnArgs>;
export declare const EmployeeUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.EmployeeUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnEmployee.schema.d.ts.map