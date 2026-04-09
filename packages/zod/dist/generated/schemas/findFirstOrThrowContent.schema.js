import * as z from 'zod';
import { ContentOrderByWithRelationInputObjectSchema as ContentOrderByWithRelationInputObjectSchema } from "./objects/ContentOrderByWithRelationInput.schema.js";
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from "./objects/ContentWhereInput.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
import { ContentScalarFieldEnumSchema } from "./enums/ContentScalarFieldEnum.schema.js";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const ContentFindFirstOrThrowSelectSchema = z.object({
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
export const ContentFindFirstOrThrowSelectZodSchema = z.object({
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
export const ContentFindFirstOrThrowSchema = z.object({ select: ContentFindFirstOrThrowSelectSchema.optional(), orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array()]).optional() }).strict();
export const ContentFindFirstOrThrowZodSchema = z.object({ select: ContentFindFirstOrThrowSelectSchema.optional(), orderBy: z.union([ContentOrderByWithRelationInputObjectSchema, ContentOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContentWhereInputObjectSchema.optional(), cursor: ContentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContentScalarFieldEnumSchema, ContentScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstOrThrowContent.schema.js.map