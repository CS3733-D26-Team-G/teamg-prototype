import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema.ts'

const makeSchema = () => z.object({
  is: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => EmployeeWhereInputObjectSchema).optional()
}).strict();
export const EmployeeScalarRelationFilterObjectSchema: z.ZodType<Prisma.EmployeeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeScalarRelationFilter>;
export const EmployeeScalarRelationFilterObjectZodSchema = makeSchema();
