import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCreateWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutEmployeeInput>;
export declare const AccountCreateWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateWithoutEmployeeInput.schema.d.ts.map