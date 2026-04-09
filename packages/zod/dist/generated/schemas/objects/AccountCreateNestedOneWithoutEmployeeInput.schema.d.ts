import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCreateNestedOneWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutEmployeeInput>;
export declare const AccountCreateNestedOneWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateOrConnectWithoutEmployeeInput, unknown>>>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateNestedOneWithoutEmployeeInput.schema.d.ts.map