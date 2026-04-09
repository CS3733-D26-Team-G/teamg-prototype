import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { EmployeeCountOrderByAggregateInputObjectSchema as EmployeeCountOrderByAggregateInputObjectSchema } from './EmployeeCountOrderByAggregateInput.schema.ts';
import { EmployeeMaxOrderByAggregateInputObjectSchema as EmployeeMaxOrderByAggregateInputObjectSchema } from './EmployeeMaxOrderByAggregateInput.schema.ts';
import { EmployeeMinOrderByAggregateInputObjectSchema as EmployeeMinOrderByAggregateInputObjectSchema } from './EmployeeMinOrderByAggregateInput.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  first_name: SortOrderSchema.optional(),
  last_name: SortOrderSchema.optional(),
  date_of_birth: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  start_date: SortOrderSchema.optional(),
  supervisor: SortOrderSchema.optional(),
  phone_number: SortOrderSchema.optional(),
  personal_email: SortOrderSchema.optional(),
  corporate_email: SortOrderSchema.optional(),
  _count: z.lazy(() => EmployeeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EmployeeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EmployeeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EmployeeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeOrderByWithAggregationInput>;
export const EmployeeOrderByWithAggregationInputObjectZodSchema = makeSchema();
