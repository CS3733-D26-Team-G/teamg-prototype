import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const makeSchema = () => z.object({
  username: z.string(),
  password: z.string(),
  type: AccountTypeSchema
}).strict();
export const AccountCreateWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountCreateWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCreateWithoutEmployeeInput>;
export const AccountCreateWithoutEmployeeInputObjectZodSchema = makeSchema();
