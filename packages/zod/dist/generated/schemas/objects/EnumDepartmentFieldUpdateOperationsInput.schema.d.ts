import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumDepartmentFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput>;
export declare const EnumDepartmentFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumDepartmentFieldUpdateOperationsInput.schema.d.ts.map