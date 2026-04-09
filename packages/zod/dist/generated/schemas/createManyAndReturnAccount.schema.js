import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from "./objects/AccountSelect.schema.js";
import { AccountCreateManyInputObjectSchema as AccountCreateManyInputObjectSchema } from "./objects/AccountCreateManyInput.schema.js";
export const AccountCreateManyAndReturnSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const AccountCreateManyAndReturnZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnAccount.schema.js.map