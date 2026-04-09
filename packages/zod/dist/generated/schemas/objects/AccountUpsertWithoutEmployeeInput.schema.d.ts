import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUpsertWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUpsertWithoutEmployeeInput>;
export declare const AccountUpsertWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    update: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown>>>]>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown>>>]>;
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpsertWithoutEmployeeInput.schema.d.ts.map