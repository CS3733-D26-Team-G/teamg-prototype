import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./AccountWhereInput.schema.js";
const makeSchema = () => z.object({
    is: z.lazy(() => AccountWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => AccountWhereInputObjectSchema).optional().nullable()
}).strict();
export const AccountNullableScalarRelationFilterObjectSchema = makeSchema();
export const AccountNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountNullableScalarRelationFilter.schema.js.map