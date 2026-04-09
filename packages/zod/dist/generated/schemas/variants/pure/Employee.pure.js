import * as z from 'zod';
import { PositionSchema } from "../../enums/Position.schema.js";
import { DepartmentSchema } from "../../enums/Department.schema.js";
// prettier-ignore
export const EmployeeModelSchema = z.object({
    uuid: z.string(),
    account: z.unknown().nullable(),
    first_name: z.string(),
    last_name: z.string(),
    date_of_birth: z.date(),
    position: PositionSchema,
    department: DepartmentSchema,
    start_date: z.date(),
    supervisor: z.string(),
    phone_number: z.string(),
    personal_email: z.string(),
    corporate_email: z.string()
}).strict();
//# sourceMappingURL=Employee.pure.js.map