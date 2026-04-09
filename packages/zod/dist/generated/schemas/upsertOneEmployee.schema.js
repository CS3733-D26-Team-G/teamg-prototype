import * as z from 'zod';
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from "./objects/EmployeeSelect.schema.js";
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from "./objects/EmployeeInclude.schema.js";
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from "./objects/EmployeeWhereUniqueInput.schema.js";
import { EmployeeCreateInputObjectSchema as EmployeeCreateInputObjectSchema } from "./objects/EmployeeCreateInput.schema.js";
import { EmployeeUncheckedCreateInputObjectSchema as EmployeeUncheckedCreateInputObjectSchema } from "./objects/EmployeeUncheckedCreateInput.schema.js";
import { EmployeeUpdateInputObjectSchema as EmployeeUpdateInputObjectSchema } from "./objects/EmployeeUpdateInput.schema.js";
import { EmployeeUncheckedUpdateInputObjectSchema as EmployeeUncheckedUpdateInputObjectSchema } from "./objects/EmployeeUncheckedUpdateInput.schema.js";
export const EmployeeUpsertOneSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema, create: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]), update: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]) }).strict();
export const EmployeeUpsertOneZodSchema = z.object({ select: EmployeeSelectObjectSchema.optional(), include: EmployeeIncludeObjectSchema.optional(), where: EmployeeWhereUniqueInputObjectSchema, create: z.union([EmployeeCreateInputObjectSchema, EmployeeUncheckedCreateInputObjectSchema]), update: z.union([EmployeeUpdateInputObjectSchema, EmployeeUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneEmployee.schema.js.map