import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./objects/EmployeeInclude.schema.js";
import { EmployeeCreateInputObjectSchema as EmployeeCreateInputObjectSchema } from "./objects/EmployeeCreateInput.schema.js";
import { EmployeeUncheckedCreateInputObjectSchema as EmployeeUncheckedCreateInputObjectSchema } from "./objects/EmployeeUncheckedCreateInput.schema.js";
export const EmployeeCreateOneSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]) }).strict();
export const EmployeeCreateOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), data: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneEmployee.schema.js.map