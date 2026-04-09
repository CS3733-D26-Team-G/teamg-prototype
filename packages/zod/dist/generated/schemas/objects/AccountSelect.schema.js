import * as z from 'zod';
import { EmployeeArgsObjectSchema as EmployeeArgsObjectSchema } from "./EmployeeArgs.schema.js";
const makeSchema = () => z.object({
    employee: z.union([z.boolean(), z.lazy(() => EmployeeArgsObjectSchema)]).optional(),
    employeeUuid: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    type: z.boolean().optional()
}).strict();
export const AccountSelectObjectSchema = makeSchema();
export const AccountSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountSelect.schema.js.map