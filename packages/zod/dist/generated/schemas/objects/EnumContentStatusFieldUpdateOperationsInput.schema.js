import * as z from 'zod';
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
const makeSchema = () => z.object({
    set: ContentStatusSchema.optional()
}).strict();
export const EnumContentStatusFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumContentStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumContentStatusFieldUpdateOperationsInput.schema.js.map