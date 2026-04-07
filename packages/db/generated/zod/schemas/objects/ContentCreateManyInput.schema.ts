import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts'

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
export const ContentCreateManyInputObjectSchema: z.ZodType<Prisma.ContentCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentCreateManyInput>;
export const ContentCreateManyInputObjectZodSchema = makeSchema();
