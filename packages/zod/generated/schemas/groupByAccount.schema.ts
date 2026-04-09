import type { Prisma } from "@repo/db/client";
import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './objects/AccountWhereInput.schema.ts';
import { AccountOrderByWithAggregationInputObjectSchema as AccountOrderByWithAggregationInputObjectSchema } from './objects/AccountOrderByWithAggregationInput.schema.ts';
import { AccountScalarWhereWithAggregatesInputObjectSchema as AccountScalarWhereWithAggregatesInputObjectSchema } from './objects/AccountScalarWhereWithAggregatesInput.schema.ts';
import { AccountScalarFieldEnumSchema } from './enums/AccountScalarFieldEnum.schema.ts';
import { AccountCountAggregateInputObjectSchema as AccountCountAggregateInputObjectSchema } from './objects/AccountCountAggregateInput.schema.ts';
import { AccountMinAggregateInputObjectSchema as AccountMinAggregateInputObjectSchema } from './objects/AccountMinAggregateInput.schema.ts';
import { AccountMaxAggregateInputObjectSchema as AccountMaxAggregateInputObjectSchema } from './objects/AccountMaxAggregateInput.schema.ts';

export const AccountGroupBySchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AccountGroupByArgs>;

export const AccountGroupByZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional(), orderBy: z.union([AccountOrderByWithAggregationInputObjectSchema, AccountOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AccountScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AccountScalarFieldEnumSchema), _count: z.union([ z.literal(true), AccountCountAggregateInputObjectSchema ]).optional(), _min: AccountMinAggregateInputObjectSchema.optional(), _max: AccountMaxAggregateInputObjectSchema.optional() }).strict();