import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { AccountArgsObjectSchema as AccountArgsObjectSchema } from './AccountArgs.schema.ts'

const makeSchema = () => z.object({
  account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional()
}).strict();
export const EmployeeIncludeObjectSchema: z.ZodType<Prisma.EmployeeInclude> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeInclude>;
export const EmployeeIncludeObjectZodSchema = makeSchema();
