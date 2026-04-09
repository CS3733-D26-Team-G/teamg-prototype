import * as z from 'zod';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema.js";
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from "./AccountCreateWithoutEmployeeInput.schema.js";
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedCreateWithoutEmployeeInput.schema.js";
const makeSchema = () => z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountCreateOrConnectWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateOrConnectWithoutEmployeeInput.schema.js.map