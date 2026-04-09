import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude>;
export declare const AccountIncludeObjectZodSchema: z.ZodObject<{
    employee: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountInclude.schema.d.ts.map