import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput>;
export declare const EmployeeCreateOrConnectWithoutAccountInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeCreateOrConnectWithoutAccountInput.schema.d.ts.map