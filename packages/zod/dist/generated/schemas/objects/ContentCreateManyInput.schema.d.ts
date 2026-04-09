import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentCreateManyInputObjectSchema: z.ZodType<Prisma.ContentCreateManyInput>;
export declare const ContentCreateManyInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    url: z.ZodString;
    content_owner: z.ZodString;
    for_position: z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>;
    last_modified_time: z.ZodCoercedDate<unknown>;
    expiration_time: z.ZodCoercedDate<unknown>;
    content_type: z.ZodEnum<{
        REFERENCE: "REFERENCE";
        WORKFLOW: "WORKFLOW";
    }>;
    status: z.ZodEnum<{
        AVAILABLE: "AVAILABLE";
        IN_USE: "IN_USE";
        UNAVAILABLE: "UNAVAILABLE";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=ContentCreateManyInput.schema.d.ts.map