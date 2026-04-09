import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentUpdateOneSchema: z.ZodType<Prisma.ContentUpdateArgs>;
export declare const ContentUpdateOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodType<Prisma.ContentUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUpdateInput, unknown>>, z.ZodType<Prisma.ContentUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUncheckedUpdateInput, unknown>>]>;
    where: z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=updateOneContent.schema.d.ts.map