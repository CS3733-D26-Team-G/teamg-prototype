import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./objects/AccountInclude.schema.js";
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from "./objects/AccountUpdateInput.schema.js";
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from "./objects/AccountUncheckedUpdateInput.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema.js";
export const AccountUpdateOneSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();
export const AccountUpdateOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), data: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]), where: AccountWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneAccount.schema.js.map