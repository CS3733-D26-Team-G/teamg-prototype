import * as z from 'zod';
import { AccountCreateManyInputObjectSchema as AccountCreateManyInputObjectSchema } from "./objects/AccountCreateManyInput.schema.js";
export const AccountCreateManySchema = z.object({ data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const AccountCreateManyZodSchema = z.object({ data: z.union([AccountCreateManyInputObjectSchema, z.array(AccountCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAccount.schema.js.map