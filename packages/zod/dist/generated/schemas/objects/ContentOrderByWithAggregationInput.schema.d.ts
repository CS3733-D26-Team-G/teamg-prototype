import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContentOrderByWithAggregationInput>;
export declare const ContentOrderByWithAggregationInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    title: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    url: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    content_owner: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    for_position: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    last_modified_time: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    expiration_time: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    content_type: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    _count: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ContentCountOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCountOrderByAggregateInput, unknown>>>>;
    _max: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ContentMaxOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentMaxOrderByAggregateInput, unknown>>>>;
    _min: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ContentMinOrderByAggregateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentMinOrderByAggregateInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentOrderByWithAggregationInput.schema.d.ts.map