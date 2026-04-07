import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { EnumAccountTypeFieldUpdateOperationsInputObjectSchema as EnumAccountTypeFieldUpdateOperationsInputObjectSchema } from './EnumAccountTypeFieldUpdateOperationsInput.schema.ts'

const makeSchema = () => z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AccountTypeSchema, z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateWithoutEmployeeInputObjectSchema: z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateWithoutEmployeeInput>;
export const AccountUpdateWithoutEmployeeInputObjectZodSchema = makeSchema();
