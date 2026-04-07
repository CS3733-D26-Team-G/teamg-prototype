import type { Prisma } from '../../prisma/client.ts';
import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema.ts';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema.ts';
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema.ts';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema.ts';

export const AccountCreateOneSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AccountCreateArgs>;

export const AccountCreateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict();