import * as z from 'zod';
export declare const ContentModelSchema: z.ZodObject<{
    uuid: z.ZodString;
    title: z.ZodString;
    url: z.ZodString;
    content_owner: z.ZodString;
    for_position: z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>;
    last_modified_time: z.ZodDate;
    expiration_time: z.ZodDate;
    content_type: z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>;
    status: z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>;
}, z.core.$strict>;
export type ContentPureType = z.infer<typeof ContentModelSchema>;
//# sourceMappingURL=Content.pure.d.ts.map