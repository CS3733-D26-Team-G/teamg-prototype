import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentCountSchema: z.ZodType<Prisma.ContentCountArgs>;
export declare const ContentCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ContentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countContent.schema.d.ts.map