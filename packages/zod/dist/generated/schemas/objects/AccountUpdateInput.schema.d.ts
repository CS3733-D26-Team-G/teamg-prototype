import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUpdateInputObjectSchema: z.ZodType<Prisma.AccountUpdateInput>;
export declare const AccountUpdateInputObjectZodSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    password: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumAccountTypeFieldUpdateOperationsInput, unknown>>>]>>;
    employee: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeUpdateOneRequiredWithoutAccountNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeUpdateOneRequiredWithoutAccountNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUpdateInput.schema.d.ts.map