import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./EmployeeInclude.schema.js";
const makeSchema = () => z.object({
    select: z.lazy(() => EmployeeSelectObjectSchema).optional(),
    include: z.lazy(() => EmployeeIncludeObjectSchema).optional()
}).strict();
export const EmployeeArgsObjectSchema = makeSchema();
export const EmployeeArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeArgs.schema.js.map