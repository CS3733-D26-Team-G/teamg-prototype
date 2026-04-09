import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./objects/EmployeeInclude.schema.js";
import { EmployeeUpdateInputObjectSchema as EmployeeUpdateInputObjectSchema } from "./objects/EmployeeUpdateInput.schema.js";
import { EmployeeUncheckedUpdateInputObjectSchema as EmployeeUncheckedUpdateInputObjectSchema } from "./objects/EmployeeUncheckedUpdateInput.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./objects/EmployeeWhereUniqueInput.schema.js";
export const EmployeeUpdateOneSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]), where: EmployeeWhereUniqueInputObjectSchema }).strict();
export const EmployeeUpdateOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]), where: EmployeeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneEmployee.schema.js.map