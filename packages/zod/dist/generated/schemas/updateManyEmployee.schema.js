import * as z from 'zod';
import { EmployeeUpdateManyMutationInputObjectSchema as EmployeeUpdateManyMutationInputObjectSchema } from "./objects/EmployeeUpdateManyMutationInput.schema.js";
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./objects/EmployeeWhereInput.schema.js";
export const EmployeeUpdateManySchema = z.object({ data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();
export const EmployeeUpdateManyZodSchema = z.object({ data: EmployeeUpdateManyMutationInputObjectSchema, where: EmployeeWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyEmployee.schema.js.map