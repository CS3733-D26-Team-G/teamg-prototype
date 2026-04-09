import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { AccountTypeSchema } from '../enums/AccountType.schema.ts'

const nestedenumaccounttypefilterSchema = z.object({
  equals: AccountTypeSchema.optional(),
  in: AccountTypeSchema.array().optional(),
  notIn: AccountTypeSchema.array().optional(),
  not: z.union([AccountTypeSchema, z.lazy(() => NestedEnumAccountTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAccountTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumAccountTypeFilter> = nestedenumaccounttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAccountTypeFilter>;
export const NestedEnumAccountTypeFilterObjectZodSchema = nestedenumaccounttypefilterSchema;
