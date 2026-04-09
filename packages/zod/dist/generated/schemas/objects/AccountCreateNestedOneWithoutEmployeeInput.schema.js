import * as z from 'zod';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from "./AccountCreateWithoutEmployeeInput.schema.js";
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedCreateWithoutEmployeeInput.schema.js";
import { AccountCreateOrConnectWithoutEmployeeInputObjectSchema as AccountCreateOrConnectWithoutEmployeeInputObjectSchema } from "./AccountCreateOrConnectWithoutEmployeeInput.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema.js";
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputObjectSchema).optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional()
}).strict();
export const AccountCreateNestedOneWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountCreateNestedOneWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateNestedOneWithoutEmployeeInput.schema.js.map