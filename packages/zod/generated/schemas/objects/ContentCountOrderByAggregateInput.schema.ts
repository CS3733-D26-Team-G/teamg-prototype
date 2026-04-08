import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  content_owner: SortOrderSchema.optional(),
  for_position: SortOrderSchema.optional(),
  last_modified_time: SortOrderSchema.optional(),
  expiration_time: SortOrderSchema.optional(),
  content_type: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const ContentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentCountOrderByAggregateInput>;
export const ContentCountOrderByAggregateInputObjectZodSchema = makeSchema();
