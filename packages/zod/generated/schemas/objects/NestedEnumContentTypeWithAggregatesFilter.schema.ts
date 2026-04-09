import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { ContentTypeSchema } from '../enums/ContentType.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumContentTypeFilterObjectSchema as NestedEnumContentTypeFilterObjectSchema } from './NestedEnumContentTypeFilter.schema.ts'

const nestedenumcontenttypewithaggregatesfilterSchema = z.object({
  equals: ContentTypeSchema.optional(),
  in: ContentTypeSchema.array().optional(),
  notIn: ContentTypeSchema.array().optional(),
  not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumContentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumContentTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumContentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumContentTypeWithAggregatesFilter> = nestedenumcontenttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumContentTypeWithAggregatesFilter>;
export const NestedEnumContentTypeWithAggregatesFilterObjectZodSchema = nestedenumcontenttypewithaggregatesfilterSchema;
