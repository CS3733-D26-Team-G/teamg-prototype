import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.js";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.js";
import { PositionSchema } from "../enums/Position.schema.js";
import { EnumPositionFieldUpdateOperationsInputObjectSchema as EnumPositionFieldUpdateOperationsInputObjectSchema } from "./EnumPositionFieldUpdateOperationsInput.schema.js";
import { DepartmentSchema } from "../enums/Department.schema.js";
import { EnumDepartmentFieldUpdateOperationsInputObjectSchema as EnumDepartmentFieldUpdateOperationsInputObjectSchema } from "./EnumDepartmentFieldUpdateOperationsInput.schema.js";
import { AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema as AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema } from "./AccountUncheckedUpdateOneWithoutEmployeeNestedInput.schema.js";
const makeSchema = () => z.object({
    uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    first_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    last_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    date_of_birth: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    position: z.union([PositionSchema, z.lazy(() => EnumPositionFieldUpdateOperationsInputObjectSchema)]).optional(),
    department: z.union([DepartmentSchema, z.lazy(() => EnumDepartmentFieldUpdateOperationsInputObjectSchema)]).optional(),
    start_date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    supervisor: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    phone_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    personal_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    corporate_email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    account: z.lazy(() => AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema).optional()
}).strict();
export const EmployeeUncheckedUpdateInputObjectSchema = makeSchema();
export const EmployeeUncheckedUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeUncheckedUpdateInput.schema.js.map