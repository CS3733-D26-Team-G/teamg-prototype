import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema.ts';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema.ts';
import { EnumPositionFilterObjectSchema as EnumPositionFilterObjectSchema } from './EnumPositionFilter.schema.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema.ts';
import { EnumContentTypeFilterObjectSchema as EnumContentTypeFilterObjectSchema } from './EnumContentTypeFilter.schema.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { EnumContentStatusFilterObjectSchema as EnumContentStatusFilterObjectSchema } from './EnumContentStatusFilter.schema.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts'

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
export const ContentWhereInputObjectSchema: z.ZodType<Prisma.ContentWhereInput> = contentwhereinputSchema as unknown as z.ZodType<Prisma.ContentWhereInput>;
export const ContentWhereInputObjectZodSchema = contentwhereinputSchema;
