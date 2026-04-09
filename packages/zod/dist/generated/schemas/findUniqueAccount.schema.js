import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./objects/AccountInclude.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema.js";
export const AccountFindUniqueSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();
export const AccountFindUniqueZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueAccount.schema.js.map