import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeCreateManyAndReturnSchema: z.ZodType<Prisma.EmployeeCreateManyAndReturnArgs>;
export declare const EmployeeCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnEmployee.schema.d.ts.map