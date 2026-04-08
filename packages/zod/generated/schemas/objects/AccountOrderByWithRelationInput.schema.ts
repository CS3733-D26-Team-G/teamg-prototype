import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { EmployeeOrderByWithRelationInputObjectSchema as EmployeeOrderByWithRelationInputObjectSchema } from './EmployeeOrderByWithRelationInput.schema.ts'

const makeSchema = () => z.object({
  employeeUuid: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  employee: z.lazy(() => EmployeeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AccountOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountOrderByWithRelationInput>;
export const AccountOrderByWithRelationInputObjectZodSchema = makeSchema();
