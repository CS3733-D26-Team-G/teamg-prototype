import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { ContentCountOrderByAggregateInputObjectSchema as ContentCountOrderByAggregateInputObjectSchema } from './ContentCountOrderByAggregateInput.schema.ts';
import { ContentMaxOrderByAggregateInputObjectSchema as ContentMaxOrderByAggregateInputObjectSchema } from './ContentMaxOrderByAggregateInput.schema.ts';
import { ContentMinOrderByAggregateInputObjectSchema as ContentMinOrderByAggregateInputObjectSchema } from './ContentMinOrderByAggregateInput.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  content_owner: SortOrderSchema.optional(),
  for_position: SortOrderSchema.optional(),
  last_modified_time: SortOrderSchema.optional(),
  expiration_time: SortOrderSchema.optional(),
  content_type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  _count: z.lazy(() => ContentCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ContentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ContentMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ContentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ContentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentOrderByWithAggregationInput>;
export const ContentOrderByWithAggregationInputObjectZodSchema = makeSchema();
