import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumContentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput>;
export declare const EnumContentTypeFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumContentTypeFieldUpdateOperationsInput.schema.d.ts.map