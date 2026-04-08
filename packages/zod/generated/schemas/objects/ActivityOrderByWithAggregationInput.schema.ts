import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema.ts';
import { ActivityCountOrderByAggregateInputObjectSchema as ActivityCountOrderByAggregateInputObjectSchema } from './ActivityCountOrderByAggregateInput.schema.ts';
import { ActivityMaxOrderByAggregateInputObjectSchema as ActivityMaxOrderByAggregateInputObjectSchema } from './ActivityMaxOrderByAggregateInput.schema.ts';
import { ActivityMinOrderByAggregateInputObjectSchema as ActivityMinOrderByAggregateInputObjectSchema } from './ActivityMinOrderByAggregateInput.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  employeeUuid: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resourceUuid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  timestamp: SortOrderSchema.optional(),
  _count: z.lazy(() => ActivityCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActivityMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActivityMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActivityOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActivityOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityOrderByWithAggregationInput>;
export const ActivityOrderByWithAggregationInputObjectZodSchema = makeSchema();
