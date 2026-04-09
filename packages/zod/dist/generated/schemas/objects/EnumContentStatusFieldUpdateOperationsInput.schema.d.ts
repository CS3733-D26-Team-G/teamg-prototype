import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumContentStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumContentStatusFieldUpdateOperationsInput>;
export declare const EnumContentStatusFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumContentStatusFieldUpdateOperationsInput.schema.d.ts.map