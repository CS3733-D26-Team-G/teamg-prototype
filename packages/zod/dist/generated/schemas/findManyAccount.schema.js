import * as z from 'zod';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from "./objects/AccountInclude.schema.js";
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from "./objects/AccountOrderByWithRelationInput.schema.js";
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from "./objects/AccountWhereInput.schema.js";
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from "./objects/AccountWhereUniqueInput.schema.js";
import { AccountScalarFieldEnumSchema } from "./enums/AccountScalarFieldEnum.schema.js";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const AccountFindManySelectSchema = z.object({
    employee: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    type: z.boolean().optional()
}).strict();
export const AccountFindManySelectZodSchema = z.object({
    employee: z.boolean().optional(),
    employeeUuid: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    type: z.boolean().optional()
}).strict();
export const AccountFindManySchema = z.object({ select: AccountFindManySelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();
export const AccountFindManyZodSchema = z.object({ select: AccountFindManySelectSchema.optional(), include: z.lazy(() => AccountIncludeObjectSchema.optional()), orderBy: z.union([AccountOrderByWithRelationInputObjectSchema, AccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountWhereInputObjectSchema.optional(), cursor: AccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountScalarFieldEnumSchema, AccountScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findManyAccount.schema.js.map