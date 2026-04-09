import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./objects/EmployeeInclude.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./objects/EmployeeWhereUniqueInput.schema.js";
export const EmployeeDeleteOneSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict();
export const EmployeeDeleteOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneEmployee.schema.js.map