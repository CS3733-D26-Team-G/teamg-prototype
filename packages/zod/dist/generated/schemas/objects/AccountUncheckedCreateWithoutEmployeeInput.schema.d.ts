import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUncheckedCreateWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput>;
export declare const AccountUncheckedCreateWithoutEmployeeInputObjectZodSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedCreateWithoutEmployeeInput.schema.d.ts.map