import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCreateOrConnectWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutEmployeeInput>;
export declare const AccountCreateOrConnectWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.AccountCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateWithoutEmployeeInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateWithoutEmployeeInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateOrConnectWithoutEmployeeInput.schema.d.ts.map