import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './AccountSelect.schema.ts';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './AccountInclude.schema.ts'

const makeSchema = () => z.object({
  select: z.lazy(() => AccountSelectObjectSchema).optional(),
  include: z.lazy(() => AccountIncludeObjectSchema).optional()
}).strict();
export const AccountArgsObjectSchema = makeSchema();
export const AccountArgsObjectZodSchema = makeSchema();
