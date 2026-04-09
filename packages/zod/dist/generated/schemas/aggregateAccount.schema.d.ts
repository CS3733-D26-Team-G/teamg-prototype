import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const AccountAggregateSchema: z.ZodType<Prisma.AccountAggregateArgs>;
export declare const AccountAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.AccountOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.AccountWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.AccountCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.AccountMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.AccountMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.AccountMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateAccount.schema.d.ts.map