import * as z from 'zod';
import { EmployeeCreateManyInputObjectSchema as EmployeeCreateManyInputObjectSchema } from "./objects/EmployeeCreateManyInput.schema.js";
export const EmployeeCreateManySchema = z.object({ data: z.union([EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const EmployeeCreateManyZodSchema = z.object({ data: z.union([EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyEmployee.schema.js.map