import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeCreateInputObjectSchema: z.ZodType<Prisma.EmployeeCreateInput>;
export declare const EmployeeCreateInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodString>;
    first_name: z.ZodString;
    last_name: z.ZodString;
    date_of_birth: z.ZodCoercedDate<unknown>;
    position: z.ZodEnum<{
        ADMIN: "ADMIN";
        UNDERWRITER: "UNDERWRITER";
        BUSINESS_ANALYST: "BUSINESS_ANALYST";
    }>;
    department: z.ZodEnum<{
        OPERATION_TECHNOLOGY: "OPERATION_TECHNOLOGY";
        ACCOUNTING: "ACCOUNTING";
    }>;
    start_date: z.ZodCoercedDate<unknown>;
    supervisor: z.ZodString;
    phone_number: z.ZodString;
    personal_email: z.ZodString;
    corporate_email: z.ZodString;
    account: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountCreateNestedOneWithoutEmployeeInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountCreateNestedOneWithoutEmployeeInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeCreateInput.schema.d.ts.map