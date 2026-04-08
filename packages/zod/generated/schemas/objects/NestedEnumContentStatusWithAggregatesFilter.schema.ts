import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumContentStatusFilterObjectSchema as NestedEnumContentStatusFilterObjectSchema } from './NestedEnumContentStatusFilter.schema.ts'

const nestedenumcontentstatuswithaggregatesfilterSchema = z.object({
  equals: ContentStatusSchema.optional(),
  in: ContentStatusSchema.array().optional(),
  notIn: ContentStatusSchema.array().optional(),
  not: z.union([ContentStatusSchema, z.lazy(() => NestedEnumContentStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumContentStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumContentStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumContentStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumContentStatusWithAggregatesFilter> = nestedenumcontentstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumContentStatusWithAggregatesFilter>;
export const NestedEnumContentStatusWithAggregatesFilterObjectZodSchema = nestedenumcontentstatuswithaggregatesfilterSchema;
