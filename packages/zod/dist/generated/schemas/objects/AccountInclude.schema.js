import * as z from 'zod';
import { EmployeeArgsObjectSchema as EmployeeArgsObjectSchema } from "./EmployeeArgs.schema.js";
const makeSchema = () => z.object({
    employee: z.union([z.boolean(), z.lazy(() => EmployeeArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema = makeSchema();
export const AccountIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountInclude.schema.js.map