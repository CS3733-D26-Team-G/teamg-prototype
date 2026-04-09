import * as z from 'zod';
import { PositionSchema } from "../enums/Position.schema.js";
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
const makeSchema = () => z.object({
    uuid: z.string().optional(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    for_position: PositionSchema,
    last_modified_time: z.coerce.date(),
    expiration_time: z.coerce.date(),
    content_type: ContentTypeSchema,
    status: ContentStatusSchema
}).strict();
export const ContentCreateManyInputObjectSchema = makeSchema();
export const ContentCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentCreateManyInput.schema.js.map