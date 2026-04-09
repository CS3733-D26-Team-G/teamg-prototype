import * as z from 'zod';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from "./UuidWithAggregatesFilter.schema.js";
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema.js";
import { EnumPositionWithAggregatesFilterObjectSchema as EnumPositionWithAggregatesFilterObjectSchema } from "./EnumPositionWithAggregatesFilter.schema.js";
import { PositionSchema } from "../enums/Position.schema.js";
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema.js";
import { EnumContentTypeWithAggregatesFilterObjectSchema as EnumContentTypeWithAggregatesFilterObjectSchema } from "./EnumContentTypeWithAggregatesFilter.schema.js";
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { EnumContentStatusWithAggregatesFilterObjectSchema as EnumContentStatusWithAggregatesFilterObjectSchema } from "./EnumContentStatusWithAggregatesFilter.schema.js";
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
const contentscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => ContentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ContentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ContentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ContentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    uuid: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    content_owner: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    for_position: z.union([z.lazy(() => EnumPositionWithAggregatesFilterObjectSchema), PositionSchema]).optional(),
    last_modified_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    expiration_time: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    content_type: z.union([z.lazy(() => EnumContentTypeWithAggregatesFilterObjectSchema), ContentTypeSchema]).optional(),
    status: z.union([z.lazy(() => EnumContentStatusWithAggregatesFilterObjectSchema), ContentStatusSchema]).optional()
}).strict();
export const ContentScalarWhereWithAggregatesInputObjectSchema = contentscalarwherewithaggregatesinputSchema;
export const ContentScalarWhereWithAggregatesInputObjectZodSchema = contentscalarwherewithaggregatesinputSchema;
//# sourceMappingURL=ContentScalarWhereWithAggregatesInput.schema.js.map