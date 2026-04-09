import * as z from 'zod';
export declare const ContentScalarFieldEnumSchema: z.ZodEnum<{
    uuid: "uuid";
    title: "title";
    url: "url";
    content_owner: "content_owner";
    for_position: "for_position";
    last_modified_time: "last_modified_time";
    expiration_time: "expiration_time";
    content_type: "content_type";
    status: "status";
}>;
export type ContentScalarFieldEnum = z.infer<typeof ContentScalarFieldEnumSchema>;
//# sourceMappingURL=ContentScalarFieldEnum.schema.d.ts.map