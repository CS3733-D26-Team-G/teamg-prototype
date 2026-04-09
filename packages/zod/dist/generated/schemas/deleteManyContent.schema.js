import * as z from 'zod';
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from "./objects/ContentWhereInput.schema.js";
export const ContentDeleteManySchema = z.object({ where: ContentWhereInputObjectSchema.optional() }).strict();
export const ContentDeleteManyZodSchema = z.object({ where: ContentWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyContent.schema.js.map