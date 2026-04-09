import * as z from 'zod';
import { PositionSchema } from "../../enums/Position.schema.js";
import { ContentTypeSchema } from "../../enums/ContentType.schema.js";
import { ContentStatusSchema } from "../../enums/ContentStatus.schema.js";
// prettier-ignore
export const ContentModelSchema = z.object({
    uuid: z.string(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    for_position: PositionSchema,
    last_modified_time: z.date(),
    expiration_time: z.date(),
    content_type: ContentTypeSchema,
    status: ContentStatusSchema
}).strict();
//# sourceMappingURL=Content.pure.js.map