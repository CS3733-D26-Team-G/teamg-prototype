import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema: z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutAccountNestedInput>;
export declare const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedCreateWithoutAccountInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateOrConnectWithoutAccountInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeUpsertWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpsertWithoutAccountInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateWithoutAccountInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUncheckedUpdateWithoutAccountInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeUpdateOneRequiredWithoutAccountNestedInput.schema.d.ts.map