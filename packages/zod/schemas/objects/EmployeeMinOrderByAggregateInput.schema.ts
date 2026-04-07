import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  accountUsername: SortOrderSchema.optional(),
  first_name: SortOrderSchema.optional(),
  last_name: SortOrderSchema.optional(),
  date_of_birth: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  department: SortOrderSchema.optional(),
  start_date: SortOrderSchema.optional(),
  supervisor: SortOrderSchema.optional(),
  phone_number: SortOrderSchema.optional(),
  personal_email: SortOrderSchema.optional(),
  corporate_email: SortOrderSchema.optional()
}).strict();
export const EmployeeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmployeeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeMinOrderByAggregateInput>;
export const EmployeeMinOrderByAggregateInputObjectZodSchema = makeSchema();
