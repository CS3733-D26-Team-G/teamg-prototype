import type { Prisma } from "@repo/db";
import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './objects/ContentSelect.schema.ts';
import { ContentUpdateManyMutationInputObjectSchema as ContentUpdateManyMutationInputObjectSchema } from './objects/ContentUpdateManyMutationInput.schema.ts';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';

export const ContentUpdateManyAndReturnSchema: z.ZodType<Prisma.ContentUpdateManyAndReturnArgs> = z.object({ select: ContentSelectObjectSchema.optional(), data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContentUpdateManyAndReturnArgs>;

export const ContentUpdateManyAndReturnZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();