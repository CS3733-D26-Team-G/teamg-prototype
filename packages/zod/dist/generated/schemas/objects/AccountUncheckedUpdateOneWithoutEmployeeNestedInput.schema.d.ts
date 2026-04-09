import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutEmployeeNestedInput>;
export declare const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectZodSchema: z.ZodObject<{
    create: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown>>>]>>;
    connectOrCreate: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateOrConnectWithoutEmployeeInput, unknown>>>>;
    upsert: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountUpsertWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpsertWithoutEmployeeInput, unknown>>>>;
    disconnect: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>]>>;
    delete: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>]>>;
    connect: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>>;
    update: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedUpdateOneWithoutEmployeeNestedInput.schema.d.ts.map