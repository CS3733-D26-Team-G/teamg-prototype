import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountUpsertOneSchema: z.ZodType<Prisma.AccountUpsertArgs>;
export declare const AccountUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.AccountCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateInput, unknown>>, z.ZodType<Prisma.AccountUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.AccountUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateInput, unknown>>, z.ZodType<Prisma.AccountUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneAccount.schema.d.ts.map