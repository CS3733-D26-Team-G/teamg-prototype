import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { ContentOrderByWithRelationInputObjectSchema as ContentOrderByWithRelationInputObjectSchema } from './objects/ContentOrderByWithRelationInput.schema.ts';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';
import { ContentCountAggregateInputObjectSchema as ContentCountAggregateInputObjectSchema } from './objects/ContentCountAggregateInput.schema.ts';
import { ContentMinAggregateInputObjectSchema as ContentMinAggregateInputObjectSchema } from './objects/ContentMinAggregateInput.schema.ts';
import { ContentMaxAggregateInputObjectSchema as ContentMaxAggregateInputObjectSchema } from './objects/ContentMaxAggregateInput.schema.ts';

export const ContentAggregateSchema: z.ZodType<Prisma.ContentAggregateArgs> = z.object({ orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional(), _min: ContentMinAggregateInputObjectSchema.optional(), _max: ContentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContentAggregateArgs>;

export const ContentAggregateZodSchema = z.object({ orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional(), _min: ContentMinAggregateInputObjectSchema.optional(), _max: ContentMaxAggregateInputObjectSchema.optional() }).strict();