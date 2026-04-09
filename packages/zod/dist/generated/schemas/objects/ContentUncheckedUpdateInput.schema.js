import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.js";
import { PositionSchema } from "../enums/Position.schema.js";
import { EnumPositionFieldUpdateOperationsInputObjectSchema as EnumPositionFieldUpdateOperationsInputObjectSchema } from "./EnumPositionFieldUpdateOperationsInput.schema.js";
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema.js";
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { EnumContentTypeFieldUpdateOperationsInputObjectSchema as EnumContentTypeFieldUpdateOperationsInputObjectSchema } from "./EnumContentTypeFieldUpdateOperationsInput.schema.js";
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
import { EnumContentStatusFieldUpdateOperationsInputObjectSchema as EnumContentStatusFieldUpdateOperationsInputObjectSchema } from "./EnumContentStatusFieldUpdateOperationsInput.schema.js";
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
export const ContentUncheckedUpdateInputObjectSchema = makeSchema();
export const ContentUncheckedUpdateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentUncheckedUpdateInput.schema.js.map