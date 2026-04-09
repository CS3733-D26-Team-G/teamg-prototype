import * as z from 'zod';
import { AccountCreateWithoutEmployeeInputObjectSchema as AccountCreateWithoutEmployeeInputObjectSchema } from "./AccountCreateWithoutEmployeeInput.schema.js";
import { AccountUncheckedCreateWithoutEmployeeInputObjectSchema as AccountUncheckedCreateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedCreateWithoutEmployeeInput.schema.js";
import { AccountCreateOrConnectWithoutEmployeeInputObjectSchema as AccountCreateOrConnectWithoutEmployeeInputObjectSchema } from "./AccountCreateOrConnectWithoutEmployeeInput.schema.js";
import { AccountUpsertWithoutEmployeeInputObjectSchema as AccountUpsertWithoutEmployeeInputObjectSchema } from "./AccountUpsertWithoutEmployeeInput.schema.js";
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./AccountWhereInput.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema.js";
import { AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema as AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema } from "./AccountUpdateToOneWithWhereWithoutEmployeeInput.schema.js";
import { AccountUpdateWithoutEmployeeInputObjectSchema as AccountUpdateWithoutEmployeeInputObjectSchema } from "./AccountUpdateWithoutEmployeeInput.schema.js";
import { AccountUncheckedUpdateWithoutEmployeeInputObjectSchema as AccountUncheckedUpdateWithoutEmployeeInputObjectSchema } from "./AccountUncheckedUpdateWithoutEmployeeInput.schema.js";
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => AccountCreateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutEmployeeInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutEmployeeInputObjectSchema).optional(),
    upsert: z.lazy(() => AccountUpsertWithoutEmployeeInputObjectSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => AccountWhereInputObjectSchema)]).optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => AccountUpdateToOneWithWhereWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUpdateWithoutEmployeeInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutEmployeeInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectSchema = makeSchema();
export const AccountUncheckedUpdateOneWithoutEmployeeNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUncheckedUpdateOneWithoutEmployeeNestedInput.schema.js.map