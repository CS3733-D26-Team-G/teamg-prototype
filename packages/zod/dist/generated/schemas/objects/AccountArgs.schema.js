import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./AccountSelect.schema.js";
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./AccountInclude.schema.js";
const makeSchema = () => z.object({
    select: z.lazy(() => AccountSelectObjectSchema).optional(),
    include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict();
export const AccountArgsObjectSchema = makeSchema();
export const AccountArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountArgs.schema.js.map