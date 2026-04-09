import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema.js";
export const AccountDeleteManySchema = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict();
export const AccountDeleteManyZodSchema = z.object({ where: AccountWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyAccount.schema.js.map