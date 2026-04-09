import * as z from 'zod';
export declare const PositionSchema: z.ZodEnum<{
    ADMIN: "ADMIN";
    UNDERWRITER: "UNDERWRITER";
    BUSINESS_ANALYST: "BUSINESS_ANALYST";
}>;
export type Position = z.infer<typeof PositionSchema>;
//# sourceMappingURL=Position.schema.d.ts.map