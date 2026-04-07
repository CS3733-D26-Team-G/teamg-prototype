import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { ContentUpdateManyMutationInputObjectSchema as ContentUpdateManyMutationInputObjectSchema } from './objects/ContentUpdateManyMutationInput.schema.ts';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';

export const ContentUpdateManySchema: z.ZodType<Prisma.ContentUpdateManyArgs> = z.object({ data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContentUpdateManyArgs>;

export const ContentUpdateManyZodSchema = z.object({ data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();