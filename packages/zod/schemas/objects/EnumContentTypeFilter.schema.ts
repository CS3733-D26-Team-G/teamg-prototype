import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { NestedEnumContentTypeFilterObjectSchema as NestedEnumContentTypeFilterObjectSchema } from './NestedEnumContentTypeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ContentTypeSchema.optional(),
  in: ContentTypeSchema.array().optional(),
  notIn: ContentTypeSchema.array().optional(),
  not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumContentTypeFilterObjectSchema: z.ZodType<Prisma.EnumContentTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumContentTypeFilter>;
export const EnumContentTypeFilterObjectZodSchema = makeSchema();
