import * as z from 'zod';
import { ContentUpdateManyMutationInputObjectSchema as ContentUpdateManyMutationInputObjectSchema } from "./objects/ContentUpdateManyMutationInput.schema.js";
import { ContentWhereInputObjectSchema as ContentWhereInputObjectSchema } from "./objects/ContentWhereInput.schema.js";
export const ContentUpdateManySchema = z.object({ data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();
export const ContentUpdateManyZodSchema = z.object({ data: ContentUpdateManyMutationInputObjectSchema, where: ContentWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyContent.schema.js.map