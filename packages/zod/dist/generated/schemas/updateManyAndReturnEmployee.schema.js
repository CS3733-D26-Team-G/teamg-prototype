import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeUpdateManyMutationInputObjectSchema as EmployeeUpdateManyMutationInputObjectSchema } from "./objects/EmployeeUpdateManyMutationInput.schema.js";
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./objects/EmployeeWhereInput.schema.js";
export const EmployeeUpdateManyAndReturnSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();
export const EmployeeUpdateManyAndReturnZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnEmployee.schema.js.map