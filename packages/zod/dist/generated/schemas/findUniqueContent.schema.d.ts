import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentFindUniqueSchema: z.ZodType<Prisma.ContentFindUniqueArgs>;
export declare const ContentFindUniqueZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=findUniqueContent.schema.d.ts.map