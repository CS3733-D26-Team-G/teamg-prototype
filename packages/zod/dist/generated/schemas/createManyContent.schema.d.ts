import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentCreateManySchema: z.ZodType<Prisma.ContentCreateManyArgs>;
export declare const ContentCreateManyZodSchema: z.ZodObject<{
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ContentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateManyInput, unknown>>, z.ZodArray<z.ZodType<Prisma.ContentCreateManyInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateManyInput, unknown>>>]>;
    skipDuplicates: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=createManyContent.schema.d.ts.map