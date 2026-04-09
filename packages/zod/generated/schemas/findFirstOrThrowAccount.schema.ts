import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema.ts';
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from './objects/AccountOrderByWithRelationInput.schema.ts';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema.ts';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema.ts';
import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema.ts';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
    employee: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    type: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountSelect>;

export const AccountFindFirstOrThrowSelectZodSchema = z.object({
    employee: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    type: z.boolean().optional()
  }).strict();

export const AccountFindFirstOrThrowSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({ select: AccountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountFindFirstOrThrowArgs>;

export const AccountFindFirstOrThrowZodSchema = z.object({ select: AccountFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();