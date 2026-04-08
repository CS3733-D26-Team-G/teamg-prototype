import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts'

const makeSchema = () => z.object({
  set: ActionTypeSchema.optional()
}).strict();
export const EnumActionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumActionTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumActionTypeFieldUpdateOperationsInput>;
export const EnumActionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
