import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { EnumAccountTypeFieldUpdateOperationsInputObjectSchema as EnumAccountTypeFieldUpdateOperationsInputObjectSchema } from './EnumAccountTypeFieldUpdateOperationsInput.schema.ts';
import { EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema as EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema } from './EmployeeUpdateOneRequiredWithoutAccountNestedInput.schema.ts'

const makeSchema = () => z.object({
  username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([AccountTypeSchema, z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  employee: z.lazy(() => EmployeeUpdateOneRequiredWithoutAccountNestedInputObjectSchema).optional()
}).strict();
export const AccountUpdateInputObjectSchema: z.ZodType<Prisma.AccountUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateInput>;
export const AccountUpdateInputObjectZodSchema = makeSchema();
