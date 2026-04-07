import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema.ts';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema.ts';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema.ts';
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema.ts';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema.ts';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema.ts';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema.ts';

export const AccountUpsertOneSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AccountUpsertArgs>;

export const AccountUpsertOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([ AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema ]), update: z.union([ AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema ]) }).strict();