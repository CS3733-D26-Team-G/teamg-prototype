import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { ContentSelectObjectSchema as ContentSelectObjectSchema } from './ContentSelect.schema.ts'

const makeSchema = () => z.object({
  select: z.lazy(() => ContentSelectObjectSchema).optional()
}).strict();
export const ContentArgsObjectSchema = makeSchema();
export const ContentArgsObjectZodSchema = makeSchema();
