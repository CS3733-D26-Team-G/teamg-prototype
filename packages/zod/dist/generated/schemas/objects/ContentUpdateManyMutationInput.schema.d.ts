import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ContentUpdateManyMutationInput>;
export declare const ContentUpdateManyMutationInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    content_owner: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLazy<z.ZodType<Prisma.StringFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.StringFieldUpdateOperationsInput, unknown>>>]>>;
    for_position: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumPositionFieldUpdateOperationsInput, unknown>>>]>>;
    last_modified_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodLazy<z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFieldUpdateOperationsInput, unknown>>>]>>;
    content_type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentTypeFieldUpdateOperationsInput, unknown>>>]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>, z.ZodLazy<z.ZodType<Prisma.EnumContentStatusFieldUpdateOperationsInput, unknown, z.core.$ZodTypeInternals<Prisma.EnumContentStatusFieldUpdateOperationsInput, unknown>>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentUpdateManyMutationInput.schema.d.ts.map