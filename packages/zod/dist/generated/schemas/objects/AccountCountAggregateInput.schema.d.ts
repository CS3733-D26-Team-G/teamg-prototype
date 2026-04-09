import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountCountAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountAggregateInputType>;
export declare const AccountCountAggregateInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodLiteral<true>>;
    username: z.ZodOptional<z.ZodLiteral<true>>;
    password: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountCountAggregateInput.schema.d.ts.map