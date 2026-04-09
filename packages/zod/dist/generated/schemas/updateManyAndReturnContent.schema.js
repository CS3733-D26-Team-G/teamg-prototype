import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentUpdateManyMutationInputObjectSchema as ContentUpdateManyMutationInputObjectSchema } from "./objects/ContentUpdateManyMutationInput.schema.js";
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from "./objects/ContentWhereInput.schema.js";
export const ContentUpdateManyAndReturnSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();
export const ContentUpdateManyAndReturnZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnContent.schema.js.map