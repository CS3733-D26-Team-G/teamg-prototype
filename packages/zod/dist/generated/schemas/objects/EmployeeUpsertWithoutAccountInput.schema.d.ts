import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeUpsertWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeUpsertWithoutAccountInput>;
export declare const EmployeeUpsertWithoutAccountInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeUpsertWithoutAccountInput.schema.d.ts.map