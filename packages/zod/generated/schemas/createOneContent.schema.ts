import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentCreateInputObjectSchema as ContentCreateInputObjectSchema } from './objects/ContentCreateInput.schema.ts';
import { ContentUncheckedCreateInputObjectSchema as ContentUncheckedCreateInputObjectSchema } from './objects/ContentUncheckedCreateInput.schema.ts';

export const ContentCreateOneSchema: z.ZodType<Prisma.ContentCreateArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  data: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ContentCreateArgs>;

export const ContentCreateOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  data: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]) }).strict();