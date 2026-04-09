import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.AccountWhereUniqueInput>;
export declare const AccountWhereUniqueInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=AccountWhereUniqueInput.schema.d.ts.map