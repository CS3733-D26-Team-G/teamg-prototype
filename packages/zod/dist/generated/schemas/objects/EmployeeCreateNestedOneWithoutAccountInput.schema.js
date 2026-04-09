import * as z from 'zod';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from "./EmployeeCreateWithoutAccountInput.schema.js";
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from "./EmployeeUncheckedCreateWithoutAccountInput.schema.js";
import { EmployeeCreateOrConnectWithoutAccountInputObjectSchema as EmployeeCreateOrConnectWithoutAccountInputObjectSchema } from "./EmployeeCreateOrConnectWithoutAccountInput.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./EmployeeWhereUniqueInput.schema.js";
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => EmployeeCreateOrConnectWithoutAccountInputObjectSchema).optional(),
    connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmployeeCreateNestedOneWithoutAccountInputObjectSchema = makeSchema();
export const EmployeeCreateNestedOneWithoutAccountInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeCreateNestedOneWithoutAccountInput.schema.js.map