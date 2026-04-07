import type { Prisma } from '../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentCreateManyInputObjectSchema as ContentCreateManyInputObjectSchema } from './objects/ContentCreateManyInput.schema.ts';

export const ContentCreateManyAndReturnSchema: z.ZodType<Prisma.ContentCreateManyAndReturnArgs> = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ContentCreateManyAndReturnArgs>;

export const ContentCreateManyAndReturnZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();