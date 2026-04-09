import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./objects/EmployeeInclude.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./objects/EmployeeWhereUniqueInput.schema.js";
export const EmployeeFindUniqueSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict();
export const EmployeeFindUniqueZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueEmployee.schema.js.map