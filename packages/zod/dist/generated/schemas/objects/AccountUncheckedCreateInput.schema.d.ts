import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateInput>;
export declare const AccountUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=AccountUncheckedCreateInput.schema.d.ts.map