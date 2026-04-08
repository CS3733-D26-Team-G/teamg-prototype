import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { AccountTypeSchema } from '../enums/AccountType.schema.ts';
import { NestedEnumAccountTypeFilterObjectSchema as NestedEnumAccountTypeFilterObjectSchema } from './NestedEnumAccountTypeFilter.schema.ts'

const makeSchema = () => z.object({
  equals: AccountTypeSchema.optional(),
  in: AccountTypeSchema.array().optional(),
  notIn: AccountTypeSchema.array().optional(),
  not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumAccountTypeFilterObjectSchema: z.ZodType<Prisma.EnumAccountTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAccountTypeFilter>;
export const EnumAccountTypeFilterObjectZodSchema = makeSchema();
