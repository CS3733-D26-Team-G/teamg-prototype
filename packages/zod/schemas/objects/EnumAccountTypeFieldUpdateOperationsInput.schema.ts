import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const makeSchema = () => z.object({
  set: AccountTypeSchema.optional()
}).strict();
export const EnumAccountTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput>;
export const EnumAccountTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
