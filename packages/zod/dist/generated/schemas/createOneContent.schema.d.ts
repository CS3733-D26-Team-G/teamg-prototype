import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentCreateOneSchema: z.ZodType<Prisma.ContentCreateArgs>;
export declare const ContentCreateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ContentCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateInput, unknown>>, z.ZodType<Prisma.ContentUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUncheckedCreateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=createOneContent.schema.d.ts.map