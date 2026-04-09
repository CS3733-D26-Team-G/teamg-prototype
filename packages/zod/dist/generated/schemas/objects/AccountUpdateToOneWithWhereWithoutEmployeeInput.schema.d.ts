import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutEmployeeInput>;
export declare const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateWithoutEmployeeInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpdateToOneWithWhereWithoutEmployeeInput.schema.d.ts.map