import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';
import { ContentCreateInputObjectSchema as ContentCreateInputObjectSchema } from './objects/ContentCreateInput.schema.ts';
import { ContentUncheckedCreateInputObjectSchema as ContentUncheckedCreateInputObjectSchema } from './objects/ContentUncheckedCreateInput.schema.ts';
import { ContentUpdateInputObjectSchema as ContentUpdateInputObjectSchema } from './objects/ContentUpdateInput.schema.ts';
import { ContentUncheckedUpdateInputObjectSchema as ContentUncheckedUpdateInputObjectSchema } from './objects/ContentUncheckedUpdateInput.schema.ts';

export const ContentUpsertOneSchema: z.ZodType<Prisma.ContentUpsertArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema, create: z.union([ ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema ]), update: z.union([ ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ContentUpsertArgs>;

export const ContentUpsertOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema, create: z.union([ ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema ]), update: z.union([ ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema ]) }).strict();