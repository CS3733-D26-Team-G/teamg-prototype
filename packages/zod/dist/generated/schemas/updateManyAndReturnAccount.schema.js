import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from "./objects/AccountUpdateManyMutationInput.schema.js";
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema.js";
export const AccountUpdateManyAndReturnSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();
export const AccountUpdateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnAccount.schema.js.map