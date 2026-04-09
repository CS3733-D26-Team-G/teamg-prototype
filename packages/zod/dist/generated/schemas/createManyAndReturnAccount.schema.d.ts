import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountCreateManyAndReturnSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs>;
export declare const AccountCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.AccountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnAccount.schema.d.ts.map