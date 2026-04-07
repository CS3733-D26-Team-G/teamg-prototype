import type { Prisma } from '../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentCreateManyInputObjectSchema as ContentCreateManyInputObjectSchema } from './objects/ContentCreateManyInput.schema.ts';

export const ContentCreateManySchema: z.ZodType<Prisma.ContentCreateManyArgs> = z.object({ data: z.union([ ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContentCreateManyArgs>;

export const ContentCreateManyZodSchema = z.object({ data: z.union([ ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();