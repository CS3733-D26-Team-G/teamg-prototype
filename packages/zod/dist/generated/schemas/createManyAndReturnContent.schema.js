import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./objects/ContentSelect.schema.js";
import { ContentCreateManyInputObjectSchema as ContentCreateManyInputObjectSchema } from "./objects/ContentCreateManyInput.schema.js";
export const ContentCreateManyAndReturnSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ContentCreateManyAndReturnZodSchema = z.object({ select: ContentSelectObjectSchema.optional(), data: z.union([ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnContent.schema.js.map