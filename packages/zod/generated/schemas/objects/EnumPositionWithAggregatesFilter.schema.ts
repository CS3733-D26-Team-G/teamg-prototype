import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { PositionSchema } from '../enums/Position.schema.ts';
import { NestedEnumPositionWithAggregatesFilterObjectSchema as NestedEnumPositionWithAggregatesFilterObjectSchema } from './NestedEnumPositionWithAggregatesFilter.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from './NestedEnumPositionFilter.schema.ts'

const makeSchema = () => z.object({
  equals: PositionSchema.optional(),
  in: PositionSchema.array().optional(),
  notIn: PositionSchema.array().optional(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPositionFilterObjectSchema).optional()
}).strict();
export const EnumPositionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumPositionWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPositionWithAggregatesFilter>;
export const EnumPositionWithAggregatesFilterObjectZodSchema = makeSchema();
