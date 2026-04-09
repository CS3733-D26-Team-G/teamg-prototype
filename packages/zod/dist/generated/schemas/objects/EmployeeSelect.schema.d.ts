import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeSelectObjectSchema: z.ZodType<Prisma.EmployeeSelect>;
export declare const EmployeeSelectObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodBoolean>;
    account: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.AccountInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    first_name: z.ZodOptional<z.ZodBoolean>;
    last_name: z.ZodOptional<z.ZodBoolean>;
    date_of_birth: z.ZodOptional<z.ZodBoolean>;
    position: z.ZodOptional<z.ZodBoolean>;
    department: z.ZodOptional<z.ZodBoolean>;
    start_date: z.ZodOptional<z.ZodBoolean>;
    supervisor: z.ZodOptional<z.ZodBoolean>;
    phone_number: z.ZodOptional<z.ZodBoolean>;
    personal_email: z.ZodOptional<z.ZodBoolean>;
    corporate_email: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeSelect.schema.d.ts.map