import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeScalarRelationFilterObjectSchema: z.ZodType<Prisma.EmployeeScalarRelationFilter>;
export declare const EmployeeScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>;
    isNot: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeScalarRelationFilter.schema.d.ts.map