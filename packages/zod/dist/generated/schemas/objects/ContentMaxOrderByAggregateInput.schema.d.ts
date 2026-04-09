import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContentMaxOrderByAggregateInput>;
export declare const ContentMaxOrderByAggregateInputObjectZodSchema: z.ZodObject<{
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
}, z.core.$strict>;
//# sourceMappingURL=ContentMaxOrderByAggregateInput.schema.d.ts.map