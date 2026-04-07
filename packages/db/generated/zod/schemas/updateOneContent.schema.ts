import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentUpdateInputObjectSchema as ContentUpdateInputObjectSchema } from './objects/ContentUpdateInput.schema.ts';
import { ContentUncheckedUpdateInputObjectSchema as ContentUncheckedUpdateInputObjectSchema } from './objects/ContentUncheckedUpdateInput.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';

export const ContentUpdateOneSchema: z.ZodType<Prisma.ContentUpdateArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  data: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]), where: ContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContentUpdateArgs>;

export const ContentUpdateOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  data: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]), where: ContentWhereUniqueInputObjectSchema }).strict();