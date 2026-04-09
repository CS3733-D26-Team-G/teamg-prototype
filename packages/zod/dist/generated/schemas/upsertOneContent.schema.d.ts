import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentUpsertOneSchema: z.ZodType<Prisma.ContentUpsertArgs>;
export declare const ContentUpsertOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>;
    create: z.ZodUnion<readonly [z.ZodType<Prisma.ContentCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentCreateInput, unknown>>, z.ZodType<Prisma.ContentUncheckedCreateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUncheckedCreateInput, unknown>>]>;
    update: z.ZodUnion<readonly [z.ZodType<Prisma.ContentUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUpdateInput, unknown>>, z.ZodType<Prisma.ContentUncheckedUpdateInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUncheckedUpdateInput, unknown>>]>;
}, z.core.$strict>;
//# sourceMappingURL=upsertOneContent.schema.d.ts.map