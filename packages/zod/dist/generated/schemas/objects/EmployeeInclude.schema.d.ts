import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeIncludeObjectSchema: z.ZodType<Prisma.EmployeeInclude>;
export declare const EmployeeIncludeObjectZodSchema: z.ZodObject<{
    account: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeInclude.schema.d.ts.map