import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput>;
export declare const AccountCreateInputObjectZodSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
    employee: z.ZodLazy<z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAccountInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCreateNestedOneWithoutAccountInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateInput.schema.d.ts.map