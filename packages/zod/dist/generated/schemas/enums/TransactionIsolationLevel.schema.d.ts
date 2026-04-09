import * as z from 'zod';
export declare const TransactionIsolationLevelSchema: z.ZodEnum<{
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
}>;
export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;
//# sourceMappingURL=TransactionIsolationLevel.schema.d.ts.map