import * as z from 'zod';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from "./UuidFilter.schema.js";
import { StringFilterObjectSchema as StringFilterObjectSchema } from "./StringFilter.schema.js";
import { EnumPositionFilterObjectSchema as EnumPositionFilterObjectSchema } from "./EnumPositionFilter.schema.js";
import { PositionSchema } from "../enums/Position.schema.js";
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from "./DateTimeFilter.schema.js";
import { EnumContentTypeFilterObjectSchema as EnumContentTypeFilterObjectSchema } from "./EnumContentTypeFilter.schema.js";
import { ContentTypeSchema } from "../enums/ContentType.schema.js";
import { EnumContentStatusFilterObjectSchema as EnumContentStatusFilterObjectSchema } from "./EnumContentStatusFilter.schema.js";
import { ContentStatusSchema } from "../enums/ContentStatus.schema.js";
const contentwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => ContentWhereInputObjectSchema), z.lazy(() => ContentWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => ContentWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => ContentWhereInputObjectSchema), z.lazy(() => ContentWhereInputObjectSchema).array()]).optional(),
    uuid: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    content_owner: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    for_position: z.union([z.lazy(() => EnumPositionFilterObjectSchema), PositionSchema]).optional(),
    last_modified_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    expiration_time: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    content_type: z.union([z.lazy(() => EnumContentTypeFilterObjectSchema), ContentTypeSchema]).optional(),
    status: z.union([z.lazy(() => EnumContentStatusFilterObjectSchema), ContentStatusSchema]).optional()
}).strict();
export const ContentWhereInputObjectSchema = contentwhereinputSchema;
export const ContentWhereInputObjectZodSchema = contentwhereinputSchema;
//# sourceMappingURL=ContentWhereInput.schema.js.map