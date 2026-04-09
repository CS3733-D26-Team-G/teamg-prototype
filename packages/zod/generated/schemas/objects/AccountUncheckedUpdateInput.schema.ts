import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { EnumAccountTypeFieldUpdateOperationsInputObjectSchema as EnumAccountTypeFieldUpdateOperationsInputObjectSchema } from './EnumAccountTypeFieldUpdateOperationsInput.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AccountTypeSchema, z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUncheckedUpdateInput>;
export const AccountUncheckedUpdateInputObjectZodSchema = makeSchema();
