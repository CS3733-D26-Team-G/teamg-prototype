import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./objects/AccountInclude.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema.js";
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from "./objects/AccountCreateInput.schema.js";
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from "./objects/AccountUncheckedCreateInput.schema.js";
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from "./objects/AccountUpdateInput.schema.js";
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from "./objects/AccountUncheckedUpdateInput.schema.js";
export const AccountUpsertOneSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]), update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]) }).strict();
export const AccountUpsertOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]), update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneAccount.schema.js.map