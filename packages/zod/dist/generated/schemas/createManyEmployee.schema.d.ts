import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeCreateManySchema: z.ZodType<Prisma.EmployeeCreateManyArgs>;
export declare const EmployeeCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyEmployee.schema.d.ts.map