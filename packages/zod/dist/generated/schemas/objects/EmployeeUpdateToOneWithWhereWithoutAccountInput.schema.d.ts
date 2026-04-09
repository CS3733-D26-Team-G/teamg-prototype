import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput>;
export declare const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeUpdateToOneWithWhereWithoutAccountInput.schema.d.ts.map