import * as z from 'zod';
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
const makeSchema = () => z.object({
    set: ContentTypeSchema.optional()
}).strict();
export const EnumContentTypeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumContentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentTypeFieldUpdateOperationsInput.schema.js.map