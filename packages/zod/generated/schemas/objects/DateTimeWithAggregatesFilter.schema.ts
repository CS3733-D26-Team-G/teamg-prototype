import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { NestedDateTimeWithAggregatesFilterObjectSchema as NestedDateTimeWithAggregatesFilterObjectSchema } from './NestedDateTimeWithAggregatesFilter.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedDateTimeFilterObjectSchema as NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;
export const DateTimeWithAggregatesFilterObjectZodSchema = makeSchema();
