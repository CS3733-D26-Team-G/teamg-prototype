import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const ContentUpdateManySchema: z.ZodType<Prisma.ContentUpdateManyArgs>;
export declare const ContentUpdateManyZodSchema: z.ZodObject<{
    data: z.ZodType<Prisma.ContentUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.ContentWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ContentWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyContent.schema.d.ts.map