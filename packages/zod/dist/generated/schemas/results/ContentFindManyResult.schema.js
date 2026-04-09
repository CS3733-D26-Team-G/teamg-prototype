import * as z from 'zod';
export const ContentFindManyResultSchema = z.object({
    data: z.array(z.object({
        uuid: z.string(),
        title: z.string(),
        url: z.string(),
        content_owner: z.string(),
        for_position: z.unknown(),
        last_modified_time: z.date(),
        expiration_time: z.date(),
        content_type: z.unknown(),
        status: z.unknown()
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=ContentFindManyResult.schema.js.map