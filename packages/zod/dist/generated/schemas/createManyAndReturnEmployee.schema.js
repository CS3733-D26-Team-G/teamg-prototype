import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeCreateManyInputObjectSchema as EmployeeCreateManyInputObjectSchema } from "./objects/EmployeeCreateManyInput.schema.js";
export const EmployeeCreateManyAndReturnSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: z.union([EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const EmployeeCreateManyAndReturnZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), data: z.union([EmployeeCreateManyInputObjectSchema, z.array(EmployeeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnEmployee.schema.js.map