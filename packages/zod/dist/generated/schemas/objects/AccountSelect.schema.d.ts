import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountSelectObjectSchema: z.ZodType<Prisma.AccountSelect>;
export declare const AccountSelectObjectZodSchema: z.ZodObject<{
    employee: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    employeeUuid: z.ZodOptional<z.ZodBoolean>;
    username: z.ZodOptional<z.ZodBoolean>;
    password: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=AccountSelect.schema.d.ts.map