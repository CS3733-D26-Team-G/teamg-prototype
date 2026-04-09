import * as z from 'zod';
export declare const ContentTypeSchema: z.ZodEnum<{
    REFERENCE: "REFERENCE";
    WORKFLOW: "WORKFLOW";
}>;
export type ContentType = z.infer<typeof ContentTypeSchema>;
//# sourceMappingURL=ContentType.schema.d.ts.map