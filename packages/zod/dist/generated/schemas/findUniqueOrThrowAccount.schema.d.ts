import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountFindUniqueOrThrowSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs>;
export declare const AccountFindUniqueOrThrowZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodOptional<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueOrThrowAccount.schema.d.ts.map