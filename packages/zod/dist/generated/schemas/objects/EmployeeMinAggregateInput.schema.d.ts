import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const EmployeeMinAggregateInputObjectSchema: z.ZodType<Prisma.EmployeeMinAggregateInputType>;
export declare const EmployeeMinAggregateInputObjectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodLiteral<true>>;
    first_name: z.ZodOptional<z.ZodLiteral<true>>;
    last_name: z.ZodOptional<z.ZodLiteral<true>>;
    date_of_birth: z.ZodOptional<z.ZodLiteral<true>>;
    position: z.ZodOptional<z.ZodLiteral<true>>;
    department: z.ZodOptional<z.ZodLiteral<true>>;
    start_date: z.ZodOptional<z.ZodLiteral<true>>;
    supervisor: z.ZodOptional<z.ZodLiteral<true>>;
    phone_number: z.ZodOptional<z.ZodLiteral<true>>;
    personal_email: z.ZodOptional<z.ZodLiteral<true>>;
    corporate_email: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=EmployeeMinAggregateInput.schema.d.ts.map