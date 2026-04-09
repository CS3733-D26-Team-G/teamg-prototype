import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const makeSchema = () => z.object({
  username: z.string(),
  password: z.string(),
  type: AccountTypeSchema
}).strict();
export const AccountUncheckedCreateWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedCreateWithoutEmployeeInput>;
export const AccountUncheckedCreateWithoutEmployeeInputObjectZodSchema = makeSchema();
