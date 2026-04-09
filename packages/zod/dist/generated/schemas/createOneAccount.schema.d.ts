import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountCreateOneSchema: z.ZodType<Prisma.AccountCreateArgs>;
export declare const AccountCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.AccountCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateInput, unknown>>, z.ZodType<Prisma.AccountUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneAccount.schema.d.ts.map