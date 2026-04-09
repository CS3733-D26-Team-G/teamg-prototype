import * as z from 'zod';
export declare const ContentStatusSchema: z.ZodEnum<{
    AVAILABLE: "AVAILABLE";
    IN_USE: "IN_USE";
    UNAVAILABLE: "UNAVAILABLE";
}>;
export type ContentStatus = z.infer<typeof ContentStatusSchema>;
//# sourceMappingURL=ContentStatus.schema.d.ts.map