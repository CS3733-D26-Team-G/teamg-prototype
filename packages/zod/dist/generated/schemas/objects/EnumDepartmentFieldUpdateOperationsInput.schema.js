import * as z from 'zod';
import { DepartmentSchema } from "../enums/Department.schema.js";
const makeSchema = () => z.object({
    set: DepartmentSchema.optional()
}).strict();
export const EnumDepartmentFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumDepartmentFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumDepartmentFieldUpdateOperationsInput.schema.js.map