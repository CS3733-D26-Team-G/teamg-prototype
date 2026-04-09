import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EnumAccountTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput>;
export declare const EnumAccountTypeFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumAccountTypeFieldUpdateOperationsInput.schema.d.ts.map