import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
export const ContentDeleteOneSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
export const ContentDeleteOneZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneContent.schema.js.map