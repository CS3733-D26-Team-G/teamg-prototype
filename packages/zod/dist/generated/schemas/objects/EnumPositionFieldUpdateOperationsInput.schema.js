import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
const makeSchema = () => z.object({
    set: PositionSchema.optional()
}).strict();
export const EnumPositionFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumPositionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumPositionFieldUpdateOperationsInput.schema.js.map