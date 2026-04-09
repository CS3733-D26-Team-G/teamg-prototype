import * as z from 'zod';
const makeSchema = () => z.object({
    set: z.coerce.date().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const DateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DateTimeFieldUpdateOperationsInput.schema.js.map