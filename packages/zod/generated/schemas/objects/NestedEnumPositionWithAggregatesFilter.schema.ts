import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { PositionSchema } from '../enums/Position.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from './NestedEnumPositionFilter.schema.ts'

const nestedenumpositionwithaggregatesfilterSchema = z.object({
  equals: PositionSchema.optional(),
  in: PositionSchema.array().optional(),
  notIn: PositionSchema.array().optional(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional()
}).strict();
export const NestedEnumPositionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionWithAggregatesFilter> = nestedenumpositionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPositionWithAggregatesFilter>;
export const NestedEnumPositionWithAggregatesFilterObjectZodSchema = nestedenumpositionwithaggregatesfilterSchema;
