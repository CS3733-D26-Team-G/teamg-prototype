import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { SortOrderSchema } from '../enums/SortOrder.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  type: SortOrderSchema.optional()
}).strict();
export const AccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountCountOrderByAggregateInput>;
export const AccountCountOrderByAggregateInputObjectZodSchema = makeSchema();
