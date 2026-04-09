import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountCountSchema: z.ZodType<Prisma.AccountCountArgs>;
export declare const AccountCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.AccountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countAccount.schema.d.ts.map