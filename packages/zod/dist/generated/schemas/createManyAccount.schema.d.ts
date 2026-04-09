import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountCreateManySchema: z.ZodType<Prisma.AccountCreateManyArgs>;
export declare const AccountCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.AccountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAccount.schema.d.ts.map