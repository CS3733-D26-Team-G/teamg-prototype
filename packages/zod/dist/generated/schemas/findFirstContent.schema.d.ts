import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentFindFirstSelectSchema: z.ZodType<Prisma.ContentSelect>;
export declare const ContentFindFirstSelectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodBoolean>;
    url: z.ZodOptional<z.ZodBoolean>;
    content_owner: z.ZodOptional<z.ZodBoolean>;
    for_position: z.ZodOptional<z.ZodBoolean>;
    last_modified_time: z.ZodOptional<z.ZodBoolean>;
    expiration_time: z.ZodOptional<z.ZodBoolean>;
    content_type: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const ContentFindFirstSchema: z.ZodType<Prisma.ContentFindFirstArgs>;
export declare const ContentFindFirstZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        uuid: "uuid";
        title: "title";
        url: "url";
        content_owner: "content_owner";
        for_position: "for_position";
        last_modified_time: "last_modified_time";
        expiration_time: "expiration_time";
        content_type: "content_type";
        status: "status";
    }>, z.ZodArray<z.ZodEnum<{
        uuid: "uuid";
        title: "title";
        url: "url";
        content_owner: "content_owner";
        for_position: "for_position";
        last_modified_time: "last_modified_time";
        expiration_time: "expiration_time";
        content_type: "content_type";
        status: "status";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findFirstContent.schema.d.ts.map