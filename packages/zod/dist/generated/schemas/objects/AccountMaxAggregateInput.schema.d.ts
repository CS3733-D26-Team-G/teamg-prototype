import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.AccountMaxAggregateInputType>;
export declare const AccountMaxAggregateInputObjectZodSchema: z.ZodObject<{
    employeeUuid: z.ZodOptional<z.ZodLiteral<true>>;
    username: z.ZodOptional<z.ZodLiteral<true>>;
    password: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountMaxAggregateInput.schema.d.ts.map