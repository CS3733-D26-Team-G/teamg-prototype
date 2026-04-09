import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema.ts';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema.ts';
import { EnumAccountTypeFilterObjectSchema as EnumAccountTypeFilterObjectSchema } from './EnumAccountTypeFilter.schema.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { EmployeeScalarRelationFilterObjectSchema as EmployeeScalarRelationFilterObjectSchema } from './EmployeeScalarRelationFilter.schema.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema.ts'

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
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;
