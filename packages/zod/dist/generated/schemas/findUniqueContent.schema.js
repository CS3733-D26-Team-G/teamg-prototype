import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
export const ContentFindUniqueSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
export const ContentFindUniqueZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueContent.schema.js.map