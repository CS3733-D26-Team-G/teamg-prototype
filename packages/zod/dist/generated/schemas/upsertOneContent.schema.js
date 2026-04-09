import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
import { ContentCreateInputObjectSchema as ContentCreateInputObjectSchema } from "./objects/ContentCreateInput.schema.js";
import { ContentUncheckedCreateInputObjectSchema as ContentUncheckedCreateInputObjectSchema } from "./objects/ContentUncheckedCreateInput.schema.js";
import { ContentUpdateInputObjectSchema as ContentUpdateInputObjectSchema } from "./objects/ContentUpdateInput.schema.js";
import { ContentUncheckedUpdateInputObjectSchema as ContentUncheckedUpdateInputObjectSchema } from "./objects/ContentUncheckedUpdateInput.schema.js";
export const ContentUpsertOneSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema, create: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]), update: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]) }).strict();
export const ContentUpsertOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema, create: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]), update: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneContent.schema.js.map