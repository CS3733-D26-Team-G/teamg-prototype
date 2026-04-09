import * as z from 'zod';
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from "./ContentSelect.schema.js";
const makeSchema = () => z.object({
    select: z.lazy(() => ContentSelectObjectSchema).optional()
}).strict();
export const ContentArgsObjectSchema = makeSchema();
export const ContentArgsObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentArgs.schema.js.map