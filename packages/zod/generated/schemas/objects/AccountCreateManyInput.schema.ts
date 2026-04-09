import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: z.string(),
  username: z.string(),
  password: z.string(),
  type: AccountTypeSchema
}).strict();
export const AccountCreateManyInputObjectSchema: z.ZodType<Prisma.AccountCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateManyInput>;
export const AccountCreateManyInputObjectZodSchema = makeSchema();
