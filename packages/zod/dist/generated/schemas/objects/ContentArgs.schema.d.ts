import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const ContentArgsObjectSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
export declare const ContentArgsObjectZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ContentArgs.schema.d.ts.map