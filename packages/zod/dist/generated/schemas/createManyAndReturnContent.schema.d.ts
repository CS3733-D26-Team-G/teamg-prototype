import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentCreateManyAndReturnSchema: z.ZodType<Prisma.ContentCreateManyAndReturnArgs>;
export declare const ContentCreateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ContentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyAndReturnContent.schema.d.ts.map