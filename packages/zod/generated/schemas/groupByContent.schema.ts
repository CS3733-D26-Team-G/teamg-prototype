import type { Prisma } from "@repo/db";
import * as z from 'zod';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';
import { ContentOrderByWithAggregationInputObjectSchema as ContentOrderByWithAggregationInputObjectSchema } from './objects/ContentOrderByWithAggregationInput.schema.ts';
import { ContentScalarWhereWithAggregatesInputObjectSchema as ContentScalarWhereWithAggregatesInputObjectSchema } from './objects/ContentScalarWhereWithAggregatesInput.schema.ts';
import { ContentScalarFieldEnumSchema } from './enums/ContentScalarFieldEnum.schema.ts';
import { ContentCountAggregateInputObjectSchema as ContentCountAggregateInputObjectSchema } from './objects/ContentCountAggregateInput.schema.ts';
import { ContentMinAggregateInputObjectSchema as ContentMinAggregateInputObjectSchema } from './objects/ContentMinAggregateInput.schema.ts';
import { ContentMaxAggregateInputObjectSchema as ContentMaxAggregateInputObjectSchema } from './objects/ContentMaxAggregateInput.schema.ts';

export const ContentGroupBySchema: z.ZodType<Prisma.ContentGroupByArgs> = z.object({ where: ContentWhereInputObjectSchema.optional(), orderBy: z.union([ContentOrderByWithAggregationInputObjectSchema, ContentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ContentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ContentScalarFieldEnumSchema), _count: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional(), _min: ContentMinAggregateInputObjectSchema.optional(), _max: ContentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContentGroupByArgs>;

export const ContentGroupByZodSchema = z.object({ where: ContentWhereInputObjectSchema.optional(), orderBy: z.union([ContentOrderByWithAggregationInputObjectSchema, ContentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ContentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ContentScalarFieldEnumSchema), _count: z.union([ z.literal(true), ContentCountAggregateInputObjectSchema ]).optional(), _min: ContentMinAggregateInputObjectSchema.optional(), _max: ContentMaxAggregateInputObjectSchema.optional() }).strict();