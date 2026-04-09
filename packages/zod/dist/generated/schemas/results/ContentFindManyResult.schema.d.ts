import * as z from 'zod';
export declare const ContentFindManyResultSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
        content_owner: z.ZodString;
        for_position: z.ZodUnknown;
        last_modified_time: z.ZodDate;
        expiration_time: z.ZodDate;
        content_type: z.ZodUnknown;
        status: z.ZodUnknown;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        page: z.ZodNumber;
        pageSize: z.ZodNumber;
        total: z.ZodNumber;
        totalPages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=ContentFindManyResult.schema.d.ts.map