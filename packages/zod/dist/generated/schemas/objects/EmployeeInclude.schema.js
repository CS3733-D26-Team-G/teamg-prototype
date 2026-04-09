import * as z from 'zod';
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from "./AccountArgs.schema.js";
const makeSchema = () => z.object({
    account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional()
}).strict();
export const EmployeeIncludeObjectSchema = makeSchema();
export const EmployeeIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeInclude.schema.js.map