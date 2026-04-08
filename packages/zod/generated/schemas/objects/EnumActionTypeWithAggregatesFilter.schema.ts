import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { NestedEnumActionTypeWithAggregatesFilterObjectSchema as NestedEnumActionTypeWithAggregatesFilterObjectSchema } from './NestedEnumActionTypeWithAggregatesFilter.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumActionTypeFilterObjectSchema as NestedEnumActionTypeFilterObjectSchema } from './NestedEnumActionTypeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ActionTypeSchema.optional(),
  in: ActionTypeSchema.array().optional(),
  notIn: ActionTypeSchema.array().optional(),
  not: z.union([ActionTypeSchema, z.lazy(() => NestedEnumActionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional()
}).strict();
export const EnumActionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumActionTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumActionTypeWithAggregatesFilter>;
export const EnumActionTypeWithAggregatesFilterObjectZodSchema = makeSchema();
