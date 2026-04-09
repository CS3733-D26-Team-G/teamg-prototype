import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentMinAggregateInputObjectSchema: z.ZodType<Prisma.ContentMinAggregateInputType>;
export declare const ContentMinAggregateInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodLiteral<true>>;
    title: z.ZodOptional<z.ZodLiteral<true>>;
    url: z.ZodOptional<z.ZodLiteral<true>>;
    content_owner: z.ZodOptional<z.ZodLiteral<true>>;
    for_position: z.ZodOptional<z.ZodLiteral<true>>;
    last_modified_time: z.ZodOptional<z.ZodLiteral<true>>;
    expiration_time: z.ZodOptional<z.ZodLiteral<true>>;
    content_type: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentMinAggregateInput.schema.d.ts.map