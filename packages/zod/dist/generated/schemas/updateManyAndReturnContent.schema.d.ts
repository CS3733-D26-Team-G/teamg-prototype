import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentUpdateManyAndReturnSchema: z.ZodType<Prisma.ContentUpdateManyAndReturnArgs>;
export declare const ContentUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.ContentUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnContent.schema.d.ts.map