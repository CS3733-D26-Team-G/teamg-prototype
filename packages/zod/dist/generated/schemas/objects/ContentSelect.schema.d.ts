import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentSelectObjectSchema: z.ZodType<Prisma.ContentSelect>;
export declare const ContentSelectObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodBoolean>;
    url: z.ZodOptional<z.ZodBoolean>;
    content_owner: z.ZodOptional<z.ZodBoolean>;
    for_position: z.ZodOptional<z.ZodBoolean>;
    last_modified_time: z.ZodOptional<z.ZodBoolean>;
    expiration_time: z.ZodOptional<z.ZodBoolean>;
    content_type: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ContentSelect.schema.d.ts.map