import * as z from 'zod';
export declare const ContentCreateResultSchema: z.ZodObject<{
    uuid: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    content_owner: z.ZodString;
    for_position: z.ZodUnknown;
    last_modified_time: z.ZodDate;
    expiration_time: z.ZodDate;
    content_type: z.ZodUnknown;
    status: z.ZodUnknown;
}, z.core.$strip>;
//# sourceMappingURL=ContentCreateResult.schema.d.ts.map