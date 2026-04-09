import * as z from 'zod';
export declare const QueryModeSchema: z.ZodEnum<{
    default: "default";
    insensitive: "insensitive";
}>;
export type QueryMode = z.infer<typeof QueryModeSchema>;
//# sourceMappingURL=QueryMode.schema.d.ts.map