import * as z from 'zod';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from "./EmployeeCreateWithoutAccountInput.schema.js";
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedCreateWithoutAccountInput.schema.js";
import { EmployeeCreateOrConnectWithoutAccountInputObjectSchema as EmployeeCreateOrConnectWithoutAccountInputObjectSchema } from "./EmployeeCreateOrConnectWithoutAccountInput.schema.js";
import { EmployeeUpsertWithoutAccountInputObjectSchema as EmployeeUpsertWithoutAccountInputObjectSchema } from "./EmployeeUpsertWithoutAccountInput.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./EmployeeWhereUniqueInput.schema.js";
import { EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema as EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema } from "./EmployeeUpdateToOneWithWhereWithoutAccountInput.schema.js";
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from "./EmployeeUpdateWithoutAccountInput.schema.js";
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedUpdateWithoutAccountInput.schema.js";
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputObjectSchema).optional(),
    upsert: z.lazy(() => EmployeeUpsertWithoutAccountInputObjectSchema).optional(),
    connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)]).optional()
}).strict();
export const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema = makeSchema();
export const EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeUpdateOneRequiredWithoutAccountNestedInput.schema.js.map