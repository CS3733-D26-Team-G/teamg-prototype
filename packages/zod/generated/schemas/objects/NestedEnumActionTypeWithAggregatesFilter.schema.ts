import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumActionTypeFilterObjectSchema as NestedEnumActionTypeFilterObjectSchema } from './NestedEnumActionTypeFilter.schema.ts'

const nestedenumactiontypewithaggregatesfilterSchema = z.object({
  equals: ActionTypeSchema.optional(),
  in: ActionTypeSchema.array().optional(),
  notIn: ActionTypeSchema.array().optional(),
  not: z.union([ActionTypeSchema, z.lazy(() => NestedEnumActionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumActionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumActionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumActionTypeWithAggregatesFilter> = nestedenumactiontypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumActionTypeWithAggregatesFilter>;
export const NestedEnumActionTypeWithAggregatesFilterObjectZodSchema = nestedenumactiontypewithaggregatesfilterSchema;
