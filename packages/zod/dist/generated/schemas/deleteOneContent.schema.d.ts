import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentDeleteOneSchema: z.ZodType<Prisma.ContentDeleteArgs>;
export declare const ContentDeleteOneZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ContentSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    where: z.ZodType<Prisma.ContentWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereUniqueInput, unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=deleteOneContent.schema.d.ts.map