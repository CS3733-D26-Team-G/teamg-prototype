import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountArgsObjectSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
export declare const AccountArgsObjectZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountArgs.schema.d.ts.map