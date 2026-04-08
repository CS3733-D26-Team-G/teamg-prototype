import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { EnumPositionFieldUpdateOperationsInputObjectSchema as EnumPositionFieldUpdateOperationsInputObjectSchema } from './EnumPositionFieldUpdateOperationsInput.schema.ts';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { EnumContentTypeFieldUpdateOperationsInputObjectSchema as EnumContentTypeFieldUpdateOperationsInputObjectSchema } from './EnumContentTypeFieldUpdateOperationsInput.schema.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts';
import { EnumContentStatusFieldUpdateOperationsInputObjectSchema as EnumContentStatusFieldUpdateOperationsInputObjectSchema } from './EnumContentStatusFieldUpdateOperationsInput.schema.ts'

const makeSchema = () => z.object({
  uuid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_owner: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  for_position: z.union([PositionSchema, z.lazy(() => EnumPositionFieldUpdateOperationsInputObjectSchema)]).optional(),
  last_modified_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiration_time: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_type: z.union([ContentTypeSchema, z.lazy(() => EnumContentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ContentStatusSchema, z.lazy(() => EnumContentStatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ContentUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ContentUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentUncheckedUpdateInput>;
export const ContentUncheckedUpdateInputObjectZodSchema = makeSchema();
