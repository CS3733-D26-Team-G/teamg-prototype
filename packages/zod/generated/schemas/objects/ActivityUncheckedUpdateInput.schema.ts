import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { EnumActionTypeFieldUpdateOperationsInputObjectSchema as EnumActionTypeFieldUpdateOperationsInputObjectSchema } from './EnumActionTypeFieldUpdateOperationsInput.schema.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { NullableEnumResourceTypeFieldUpdateOperationsInputObjectSchema as NullableEnumResourceTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumResourceTypeFieldUpdateOperationsInput.schema.ts';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema.ts';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema.ts'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  employeeUuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([ActionTypeSchema, z.lazy(() => EnumActionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([ResourceTypeSchema, z.lazy(() => NullableEnumResourceTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  resourceUuid: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  timestamp: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ActivityUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedUpdateInput>;
export const ActivityUncheckedUpdateInputObjectZodSchema = makeSchema();
