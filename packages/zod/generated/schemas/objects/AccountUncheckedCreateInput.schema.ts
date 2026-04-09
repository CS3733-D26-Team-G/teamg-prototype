import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: z.string(),
  username: z.string(),
  password: z.string(),
  type: AccountTypeSchema
}).strict();
export const AccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateInput>;
export const AccountUncheckedCreateInputObjectZodSchema = makeSchema();
