import * as z from 'zod';
export const ContentDeleteResultSchema = z.nullable(z.object({
    uuid: z.string(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    for_position: z.unknown(),
    last_modified_time: z.date(),
    expiration_time: z.date(),
    content_type: z.unknown(),
    status: z.unknown()
}));
//# sourceMappingURL=ContentDeleteResult.schema.js.map