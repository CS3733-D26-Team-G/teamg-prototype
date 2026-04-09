import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountUpdateManyAndReturnSchema: z.ZodType<Prisma.AccountUpdateManyAndReturnArgs>;
export declare const AccountUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.AccountUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnAccount.schema.d.ts.map