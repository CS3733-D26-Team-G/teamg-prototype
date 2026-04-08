import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  employeeUuid: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: SortOrderSchema.optional(),
  resourceUuid: SortOrderSchema.optional(),
  timestamp: SortOrderSchema.optional()
}).strict();
export const ActivityMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivityMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityMaxOrderByAggregateInput>;
export const ActivityMaxOrderByAggregateInputObjectZodSchema = makeSchema();
