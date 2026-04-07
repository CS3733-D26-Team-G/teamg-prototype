import type { Prisma } from '../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';

export const ContentDeleteOneSchema: z.ZodType<Prisma.ContentDeleteArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContentDeleteArgs>;

export const ContentDeleteOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict();