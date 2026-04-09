import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { EmployeeCreateNestedOneWithoutAccountInputObjectSchema as EmployeeCreateNestedOneWithoutAccountInputObjectSchema } from './EmployeeCreateNestedOneWithoutAccountInput.schema.ts'

const makeSchema = () => z.object({
  username: z.string(),
  password: z.string(),
  type: AccountTypeSchema,
  employee: z.lazy(() => EmployeeCreateNestedOneWithoutAccountInputObjectSchema)
}).strict();
export const AccountCreateInputObjectSchema: z.ZodType<Prisma.AccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateInput>;
export const AccountCreateInputObjectZodSchema = makeSchema();
