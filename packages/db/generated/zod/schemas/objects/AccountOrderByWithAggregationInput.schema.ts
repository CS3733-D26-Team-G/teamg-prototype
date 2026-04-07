import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { AccountCountOrderByAggregateInputObjectSchema as AccountCountOrderByAggregateInputObjectSchema } from './AccountCountOrderByAggregateInput.schema.ts';
import { AccountMaxOrderByAggregateInputObjectSchema as AccountMaxOrderByAggregateInputObjectSchema } from './AccountMaxOrderByAggregateInput.schema.ts';
import { AccountMinOrderByAggregateInputObjectSchema as AccountMinOrderByAggregateInputObjectSchema } from './AccountMinOrderByAggregateInput.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountOrderByWithAggregationInput>;
export const AccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
