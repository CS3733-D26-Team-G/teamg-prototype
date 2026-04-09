import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountUpdateManySchema: z.ZodType<Prisma.AccountUpdateManyArgs>;
export declare const AccountUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.AccountUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAccount.schema.d.ts.map