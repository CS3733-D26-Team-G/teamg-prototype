import * as z from 'zod';
import { PositionSchema } from '../../enums/Position.schema.ts';
import { ContentTypeSchema } from '../../enums/ContentType.schema.ts';
import { ContentStatusSchema } from '../../enums/ContentStatus.schema.ts';
// prettier-ignore
export const ContentInputSchema = z.object({
    uuid: z.string(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    for_position: PositionSchema,
    last_modified_time: z.coerce.date(),
    expiration_time: z.coerce.date(),
    content_type: ContentTypeSchema,
    status: ContentStatusSchema
}).strict();

export type ContentInputType = z.infer<typeof ContentInputSchema>;
