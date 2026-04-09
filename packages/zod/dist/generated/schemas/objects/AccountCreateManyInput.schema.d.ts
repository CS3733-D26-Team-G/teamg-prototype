import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCreateManyInputObjectSchema: z.ZodType<Prisma.AccountCreateManyInput>;
export declare const AccountCreateManyInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    type: z.ZodEnum<{
        ADMIN: "ADMIN";
        EMPLOYEE: "EMPLOYEE";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCreateManyInput.schema.d.ts.map