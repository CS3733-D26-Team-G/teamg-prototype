import * as z from 'zod';
import { ContentCreateManyInputObjectSchema as ContentCreateManyInputObjectSchema } from "./objects/ContentCreateManyInput.schema.js";
export const ContentCreateManySchema = z.object({ data: z.union([ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ContentCreateManyZodSchema = z.object({ data: z.union([ContentCreateManyInputObjectSchema, z.array(ContentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyContent.schema.js.map