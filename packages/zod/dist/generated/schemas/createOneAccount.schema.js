import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./objects/AccountInclude.schema.js";
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from "./objects/AccountCreateInput.schema.js";
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from "./objects/AccountUncheckedCreateInput.schema.js";
export const AccountCreateOneSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict();
export const AccountCreateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneAccount.schema.js.map