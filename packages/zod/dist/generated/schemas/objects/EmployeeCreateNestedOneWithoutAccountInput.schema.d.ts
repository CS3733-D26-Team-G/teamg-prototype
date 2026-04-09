import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeCreateNestedOneWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAccountInput>;
export declare const EmployeeCreateNestedOneWithoutAccountInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateOrConnectWithoutAccountInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeCreateNestedOneWithoutAccountInput.schema.d.ts.map