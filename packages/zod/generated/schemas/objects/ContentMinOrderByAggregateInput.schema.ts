import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
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
export const ContentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ContentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentMinOrderByAggregateInput>;
export const ContentMinOrderByAggregateInputObjectZodSchema = makeSchema();
