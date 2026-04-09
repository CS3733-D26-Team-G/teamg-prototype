import * as z from 'zod';
export const ContentGroupByResultSchema = z.array(z.object({
    uuid: z.string(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    last_modified_time: z.date(),
    expiration_time: z.date(),
    _count: z.object({
        uuid: z.number(),
        title: z.number(),
        url: z.number(),
        content_owner: z.number(),
        for_position: z.number(),
        last_modified_time: z.number(),
        expiration_time: z.number(),
        content_type: z.number(),
        status: z.number()
    }).optional(),
    _min: z.object({
        uuid: z.string().nullable(),
        title: z.string().nullable(),
        url: z.string().nullable(),
        content_owner: z.string().nullable(),
        last_modified_time: z.date().nullable(),
        expiration_time: z.date().nullable()
    }).nullable().optional(),
    _max: z.object({
        uuid: z.string().nullable(),
        title: z.string().nullable(),
        url: z.string().nullable(),
        content_owner: z.string().nullable(),
        last_modified_time: z.date().nullable(),
        expiration_time: z.date().nullable()
    }).nullable().optional()
}));
//# sourceMappingURL=ContentGroupByResult.schema.js.map