import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeUpdateManySchema: z.ZodType<Prisma.EmployeeUpdateManyArgs>;
export declare const EmployeeUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.EmployeeUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyEmployee.schema.d.ts.map