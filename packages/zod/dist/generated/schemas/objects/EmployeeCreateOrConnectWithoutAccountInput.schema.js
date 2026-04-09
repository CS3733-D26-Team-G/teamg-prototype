import * as z from 'zod';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./EmployeeWhereUniqueInput.schema.js";
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from "./EmployeeCreateWithoutAccountInput.schema.js";
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedCreateWithoutAccountInput.schema.js";
const makeSchema = () => z.object({
    where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)])
}).strict();
export const EmployeeCreateOrConnectWithoutAccountInputObjectSchema = makeSchema();
export const EmployeeCreateOrConnectWithoutAccountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeCreateOrConnectWithoutAccountInput.schema.js.map