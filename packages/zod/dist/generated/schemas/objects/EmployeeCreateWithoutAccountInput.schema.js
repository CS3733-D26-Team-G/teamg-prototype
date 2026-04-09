import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
import { DepartmentSchema } from "../enums/Department.schema.js";
const makeSchema = () => z.object({
    uuid: z.string().optional(),
    first_name: z.string(),
    last_name: z.string(),
    date_of_birth: z.coerce.date(),
    position: PositionSchema,
    department: DepartmentSchema,
    start_date: z.coerce.date(),
    supervisor: z.string(),
    phone_number: z.string(),
    personal_email: z.string(),
    corporate_email: z.string()
}).strict();
export const EmployeeCreateWithoutAccountInputObjectSchema = makeSchema();
export const EmployeeCreateWithoutAccountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeCreateWithoutAccountInput.schema.js.map