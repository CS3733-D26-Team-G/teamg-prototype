import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema.ts';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema.ts';
import { EnumPositionWithAggregatesFilterObjectSchema as EnumPositionWithAggregatesFilterObjectSchema } from './EnumPositionWithAggregatesFilter.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema.ts';
import { EnumContentTypeWithAggregatesFilterObjectSchema as EnumContentTypeWithAggregatesFilterObjectSchema } from './EnumContentTypeWithAggregatesFilter.schema.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { EnumContentStatusWithAggregatesFilterObjectSchema as EnumContentStatusWithAggregatesFilterObjectSchema } from './EnumContentStatusWithAggregatesFilter.schema.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts'

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
export const ContentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput> = contentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput>;
export const ContentScalarWhereWithAggregatesInputObjectZodSchema = contentscalarwherewithaggregatesinputSchema;
