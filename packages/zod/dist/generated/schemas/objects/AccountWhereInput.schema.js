import * as z from 'zod';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from "./UuidFilter.schema.js";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.js";
import { EnumAccountTypeFilterObjectSchema as EnumAccountTypeFilterObjectSchema } from "./EnumAccountTypeFilter.schema.js";
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
import { EmployeeScalarRelationFilterObjectSchema as EmployeeScalarRelationFilterObjectSchema } from "./EmployeeScalarRelationFilter.schema.js";
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from "./EmployeeWhereInput.schema.js";
const accountwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
    employeeUuid: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumAccountTypeFilterObjectSchema), AccountTypeSchema]).optional(),
    employee: z.union([z.lazy(() => EmployeeScalarRelationFilterObjectSchema), z.lazy(() => EmployeeWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema = accountwhereinputSchema;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;
//# sourceMappingURL=AccountWhereInput.schema.js.map