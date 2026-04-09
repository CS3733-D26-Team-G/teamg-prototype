import type { Prisma } from "@repo/db";
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';

export const ContentFindUniqueOrThrowSchema: z.ZodType<Prisma.ContentFindUniqueOrThrowArgs> = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ContentFindUniqueOrThrowArgs>;

export const ContentFindUniqueOrThrowZodSchema = z.object({ select: ContentSelectObjectSchema.optional(),  where: ContentWhereUniqueInputObjectSchema }).strict();