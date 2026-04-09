import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.EmployeeUncheckedUpdateInput>;
export declare const EmployeeUncheckedUpdateInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    first_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    last_name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    date_of_birth: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    position: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionFieldUpdateOperationsInput, unknown>>>]>>;
    department: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumDepartmentFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumDepartmentFieldUpdateOperationsInput, unknown>>>]>>;
    start_date: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    supervisor: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    phone_number: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    personal_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    corporate_email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    account: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountUncheckedUpdateOneWithoutEmployeeNestedInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountUncheckedUpdateOneWithoutEmployeeNestedInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeUncheckedUpdateInput.schema.d.ts.map