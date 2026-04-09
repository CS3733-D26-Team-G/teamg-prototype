import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumPositionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput>;
export declare const EnumPositionFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumPositionFieldUpdateOperationsInput.schema.d.ts.map