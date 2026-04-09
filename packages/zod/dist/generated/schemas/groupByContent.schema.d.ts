import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentGroupBySchema: z.ZodType<Prisma.ContentGroupByArgs>;
export declare const ContentGroupByZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ContentOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithAggregationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentOrderByWithAggregationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithAggregationInput, unknown>>>]>>;
    having: z.ZodOptional<z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentScalarWhereWithAggregatesInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    by: z.ZodArray<z.ZodEnum<{
        uuid: "uuid";
        title: "title";
        url: "url";
        content_owner: "content_owner";
        for_position: "for_position";
        last_modified_time: "last_modified_time";
        expiration_time: "expiration_time";
        content_type: "content_type";
        status: "status";
    }>>;
    _count: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.ContentCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentCountAggregateInputType, unknown>>]>>;
    _min: z.ZodOptional<z.ZodType<Prisma.ContentMinAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentMinAggregateInputType, unknown>>>;
    _max: z.ZodOptional<z.ZodType<Prisma.ContentMaxAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.ContentMaxAggregateInputType, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=groupByContent.schema.d.ts.map