import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { NestedEnumAccountTypeWithAggregatesFilterObjectSchema as NestedEnumAccountTypeWithAggregatesFilterObjectSchema } from './NestedEnumAccountTypeWithAggregatesFilter.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumAccountTypeFilterObjectSchema as NestedEnumAccountTypeFilterObjectSchema } from './NestedEnumAccountTypeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: AccountTypeSchema.optional(),
  in: AccountTypeSchema.array().optional(),
  notIn: AccountTypeSchema.array().optional(),
  not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional()
}).strict();
export const EnumAccountTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter>;
export const EnumAccountTypeWithAggregatesFilterObjectZodSchema = makeSchema();
