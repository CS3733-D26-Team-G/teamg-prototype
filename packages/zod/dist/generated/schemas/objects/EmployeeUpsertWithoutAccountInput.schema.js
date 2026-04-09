import * as z from 'zod';
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from "./EmployeeUpdateWithoutAccountInput.schema.js";
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedUpdateWithoutAccountInput.schema.js";
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from "./EmployeeCreateWithoutAccountInput.schema.js";
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedCreateWithoutAccountInput.schema.js";
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./EmployeeWhereInput.schema.js";
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)]),
    create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]),
    where: z.lazy(() => EmployeeWhereInputObjectSchema).optional()
}).strict();
export const EmployeeUpsertWithoutAccountInputObjectSchema = makeSchema();
export const EmployeeUpsertWithoutAccountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeUpsertWithoutAccountInput.schema.js.map