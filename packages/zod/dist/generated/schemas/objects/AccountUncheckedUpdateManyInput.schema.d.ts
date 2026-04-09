import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput>;
export declare const AccountUncheckedUpdateManyInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    username: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    password: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumAccountTypeFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedUpdateManyInput.schema.d.ts.map