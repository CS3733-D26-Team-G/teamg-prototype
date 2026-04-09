import type { Prisma } from '../../../db/generated/prisma/client.ts';
import * as z from 'zod';
import { ContentOrderByWithRelationInputObjectSchema as ContentOrderByWithRelationInputObjectSchema } from './objects/ContentOrderByWithRelationInput.schema.ts';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from './objects/ContentWhereInput.schema.ts';
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from './objects/ContentWhereUniqueInput.schema.ts';
import { ContentScalarFieldEnumSchema } from './enums/ContentScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContentFindFirstSelectSchema: z.ZodType<Prisma.ContentSelect> = z.object({
    uuid: z.boolean().optional(),
    title: z.boolean().optional(),
    url: z.boolean().optional(),
    content_owner: z.boolean().optional(),
    for_position: z.boolean().optional(),
    last_modified_time: z.boolean().optional(),
    expiration_time: z.boolean().optional(),
    content_type: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContentSelect>;

export const ContentFindFirstSelectZodSchema = z.object({
    uuid: z.boolean().optional(),
    title: z.boolean().optional(),
    url: z.boolean().optional(),
    content_owner: z.boolean().optional(),
    for_position: z.boolean().optional(),
    last_modified_time: z.boolean().optional(),
    expiration_time: z.boolean().optional(),
    content_type: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict();

export const ContentFindFirstSchema: z.ZodType<Prisma.ContentFindFirstArgs> = z.object({ select: ContentFindFirstSelectSchema.optional(),  orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContentFindFirstArgs>;

export const ContentFindFirstZodSchema = z.object({ select: ContentFindFirstSelectSchema.optional(),  orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array()]).optional() }).strict();