import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { EmployeeArgsObjectSchema as EmployeeArgsObjectSchema } from './EmployeeArgs.schema.ts'

const makeSchema = () => z.object({
  employee: z.union([z.boolean(), z.lazy(() => EmployeeArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema: z.ZodType<Prisma.AccountInclude> = makeSchema() as unknown as z.ZodType<Prisma.AccountInclude>;
export const AccountIncludeObjectZodSchema = makeSchema();
