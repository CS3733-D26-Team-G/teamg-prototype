import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentWhereUniqueInputObjectSchema as ContentWhereUniqueInputObjectSchema } from "./objects/ContentWhereUniqueInput.schema.js";
export const ContentFindUniqueOrThrowSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
export const ContentFindUniqueOrThrowZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), where: ContentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowContent.schema.js.map