import type { Prisma } from '../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';

export const ContentFindUniqueSchema: z.ZodType<Prisma.ContentFindUniqueArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContentFindUniqueArgs>;

export const ContentFindUniqueZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict();