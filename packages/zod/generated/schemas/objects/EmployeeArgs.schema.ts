import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { EmployeeSelectObjectSchema as EmployeeSelectObjectSchema } from './EmployeeSelect.schema.ts';
import { EmployeeIncludeObjectSchema as EmployeeIncludeObjectSchema } from './EmployeeInclude.schema.ts'

const makeSchema = () => z.object({
  select: z.lazy(() => EmployeeSelectObjectSchema).optional(),
  include: z.lazy(() => EmployeeIncludeObjectSchema).optional()
}).strict();
export const EmployeeArgsObjectSchema = makeSchema();
export const EmployeeArgsObjectZodSchema = makeSchema();
