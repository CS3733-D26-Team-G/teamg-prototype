import * as z from 'zod';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from "./objects/AccountUpdateManyMutationInput.schema.js";
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema.js";
export const AccountUpdateManySchema = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();
export const AccountUpdateManyZodSchema = z.object({ data: AccountUpdateManyMutationInputObjectSchema, where: AccountWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAccount.schema.js.map