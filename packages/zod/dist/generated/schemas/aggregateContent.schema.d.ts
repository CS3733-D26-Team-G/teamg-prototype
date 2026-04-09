import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentAggregateSchema: z.ZodType<Prisma.ContentAggregateArgs>;
export declare const ContentAggregateZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ContentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ContentMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ContentMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=aggregateContent.schema.d.ts.map