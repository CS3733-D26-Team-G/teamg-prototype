import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountUpdateOneSchema: z.ZodType<Prisma.AccountUpdateArgs>;
export declare const AccountUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.AccountUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateInput, unknown>>, z.ZodType<Prisma.AccountUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneAccount.schema.d.ts.map