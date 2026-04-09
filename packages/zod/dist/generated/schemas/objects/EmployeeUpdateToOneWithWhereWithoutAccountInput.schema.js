import * as z from 'zod';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./EmployeeWhereInput.schema.js";
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from "./EmployeeUpdateWithoutAccountInput.schema.js";
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedUpdateWithoutAccountInput.schema.js";
const makeSchema = () => z.object({
    where: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)])
}).strict();
export const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema = makeSchema();
export const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeUpdateToOneWithWhereWithoutAccountInput.schema.js.map