import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const AccountMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountMinOrderByAggregateInput>;
export const AccountMinOrderByAggregateInputObjectZodSchema = makeSchema();
