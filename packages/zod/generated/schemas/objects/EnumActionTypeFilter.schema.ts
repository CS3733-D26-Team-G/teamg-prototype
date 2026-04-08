import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { NestedEnumActionTypeFilterObjectSchema as NestedEnumActionTypeFilterObjectSchema } from './NestedEnumActionTypeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ActionTypeSchema.optional(),
  in: ActionTypeSchema.array().optional(),
  notIn: ActionTypeSchema.array().optional(),
  not: z.union([ActionTypeSchema, z.lazy(() => NestedEnumActionTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumActionTypeFilterObjectSchema: z.ZodType<Prisma.EnumActionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumActionTypeFilter>;
export const EnumActionTypeFilterObjectZodSchema = makeSchema();
