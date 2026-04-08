import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './ActivitySelect.schema.ts'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivitySelectObjectSchema).optional()
}).strict();
export const ActivityArgsObjectSchema = makeSchema();
export const ActivityArgsObjectZodSchema = makeSchema();
