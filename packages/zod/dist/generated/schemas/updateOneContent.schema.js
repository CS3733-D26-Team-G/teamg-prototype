import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentUpdateInputObjectSchema as ContentUpdateInputObjectSchema } from "./objects/ContentUpdateInput.schema.js";
import { ContentUncheckedUpdateInputObjectSchema as ContentUncheckedUpdateInputObjectSchema } from "./objects/ContentUncheckedUpdateInput.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
export const ContentUpdateOneSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]), where: ContentWhereUniqueInputObjectSchema }).strict();
export const ContentUpdateOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentUpdateInputObjectSchema, ContentUncheckedUpdateInputObjectSchema]), where: ContentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneContent.schema.js.map