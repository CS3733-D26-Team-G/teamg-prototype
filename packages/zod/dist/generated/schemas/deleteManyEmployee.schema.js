import * as z from 'zod';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./objects/EmployeeWhereInput.schema.js";
export const EmployeeDeleteManySchema = z.object({ where: EmployeeWhereInputObjectSchema.optional() }).strict();
export const EmployeeDeleteManyZodSchema = z.object({ where: EmployeeWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyEmployee.schema.js.map