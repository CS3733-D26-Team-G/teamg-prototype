import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { ContentOrderByWithRelationInputObjectSchema as ContentOrderByWithRelationInputObjectSchema } from './objects/ContentOrderByWithRelationInput.schema.ts';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';
import { ContentCountAggregateInputObjectSchema as ContentCountAggregateInputObjectSchema } from './objects/ContentCountAggregateInput.schema.ts';

export const ContentCountSchema: z.ZodType<Prisma.ContentCountArgs> = z.object({ orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ContentCountArgs>;

export const ContentCountZodSchema = z.object({ orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional() }).strict();