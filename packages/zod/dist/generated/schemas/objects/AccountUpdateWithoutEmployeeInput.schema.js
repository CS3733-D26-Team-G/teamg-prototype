import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema.js";
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
import { EnumAccountTypeFieldUpdateOperationsInputObjectSchema as EnumAccountTypeFieldUpdateOperationsInputObjectSchema } from "./EnumAccountTypeFieldUpdateOperationsInput.schema.js";
const makeSchema = () => z.object({
    username: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z.union([AccountTypeSchema, z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AccountUpdateWithoutEmployeeInputObjectSchema = makeSchema();
export const AccountUpdateWithoutEmployeeInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUpdateWithoutEmployeeInput.schema.js.map