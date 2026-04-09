import * as z from 'zod';
import type { Prisma } from '@repo/db/client';
export declare const AccountNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.AccountNullableScalarRelationFilter>;
export declare const AccountNullableScalarRelationFilterObjectZodSchema: z.ZodObject<{
    is: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>>;
    isNot: z.ZodNullable<z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.AccountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.AccountWhereInput, unknown>>>>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountNullableScalarRelationFilter.schema.d.ts.map