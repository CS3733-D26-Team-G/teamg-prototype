import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./AccountWhereInput.schema.js";
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from "./AccountUpdateWithoutEmployeeInput.schema.js";
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedUpdateWithoutEmployeeInput.schema.js";
const makeSchema = () => z.object({
    where: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)])
}).strict();
export const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountUpdateToOneWithWhereWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUpdateToOneWithWhereWithoutEmployeeInput.schema.js.map