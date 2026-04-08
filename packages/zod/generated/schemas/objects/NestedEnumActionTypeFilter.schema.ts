import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts'

const nestedenumactiontypefilterSchema = z.object({
  equals: ActionTypeSchema.optional(),
  in: ActionTypeSchema.array().optional(),
  notIn: ActionTypeSchema.array().optional(),
  not: z.union([ActionTypeSchema, z.lazy(() => NestedEnumActionTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumActionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumActionTypeFilter> = nestedenumactiontypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumActionTypeFilter>;
export const NestedEnumActionTypeFilterObjectZodSchema = nestedenumactiontypefilterSchema;
