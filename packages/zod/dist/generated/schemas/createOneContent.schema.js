import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentCreateInputObjectSchema as ContentCreateInputObjectSchema } from "./objects/ContentCreateInput.schema.js";
import { ContentUncheckedCreateInputObjectSchema as ContentUncheckedCreateInputObjectSchema } from "./objects/ContentUncheckedCreateInput.schema.js";
export const ContentCreateOneSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]) }).strict();
export const ContentCreateOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentCreateInputObjectSchema, ContentUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneContent.schema.js.map