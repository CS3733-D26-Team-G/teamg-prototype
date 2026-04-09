import * as z from 'zod';
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from "./AccountUpdateWithoutEmployeeInput.schema.js";
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedUpdateWithoutEmployeeInput.schema.js";
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from "./AccountCreateWithoutEmployeeInput.schema.js";
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedCreateWithoutEmployeeInput.schema.js";
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./AccountWhereInput.schema.js";
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)]),
    create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]),
    where: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountUpsertWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountUpsertWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUpsertWithoutEmployeeInput.schema.js.map