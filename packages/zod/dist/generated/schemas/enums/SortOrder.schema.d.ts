import * as z from 'zod';
export declare const SortOrderSchema: z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>;
export type SortOrder = z.infer<typeof SortOrderSchema>;
//# sourceMappingURL=SortOrder.schema.d.ts.map