import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountMinAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinAggregateInputType>;
export declare const AccountMinAggregateInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodLiteral<true>>;
    username: z.ZodOptional<z.ZodLiteral<true>>;
    password: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountMinAggregateInput.schema.d.ts.map