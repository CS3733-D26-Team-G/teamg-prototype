import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema.ts';
import { NestedEnumAccountTypeFilterObjectSchema as NestedEnumAccountTypeFilterObjectSchema } from './NestedEnumAccountTypeFilter.schema.ts'

const nestedenumaccounttypewithaggregatesfilterSchema = z.object({
  equals: AccountTypeSchema.optional(),
  in: AccountTypeSchema.array().optional(),
  notIn: AccountTypeSchema.array().optional(),
  not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumAccountTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter> = nestedenumaccounttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter>;
export const NestedEnumAccountTypeWithAggregatesFilterObjectZodSchema = nestedenumaccounttypewithaggregatesfilterSchema;
