import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { ContentStatusSchema } from '../enums/ContentStatus.schema.ts';
import { NestedEnumContentStatusFilterObjectSchema as NestedEnumContentStatusFilterObjectSchema } from './NestedEnumContentStatusFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ContentStatusSchema.optional(),
  in: ContentStatusSchema.array().optional(),
  notIn: ContentStatusSchema.array().optional(),
  not: z.union([ContentStatusSchema, z.lazy(() => NestedEnumContentStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumContentStatusFilterObjectSchema: z.ZodType<Prisma.EnumContentStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumContentStatusFilter>;
export const EnumContentStatusFilterObjectZodSchema = makeSchema();
