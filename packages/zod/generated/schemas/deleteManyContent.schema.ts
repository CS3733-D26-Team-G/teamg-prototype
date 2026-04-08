import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';

export const ContentDeleteManySchema: z.ZodType<Prisma.ContentDeleteManyArgs> = z.object({ where: ContentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContentDeleteManyArgs>;

export const ContentDeleteManyZodSchema = z.object({ where: ContentWhereInputObjectSchema.optional() }).strict();