import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './AccountOrderByWithRelationInput.schema.ts'

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
  account: z.lazy(() => AccountOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EmployeeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeOrderByWithRelationInput>;
export const EmployeeOrderByWithRelationInputObjectZodSchema = makeSchema();
