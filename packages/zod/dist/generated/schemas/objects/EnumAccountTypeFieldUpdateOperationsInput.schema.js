import * as z from 'zod';
import { AccountTypeSchema } from "../enums/AccountType.schema.js";
const makeSchema = () => z.object({
    set: AccountTypeSchema.optional()
}).strict();
export const EnumAccountTypeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumAccountTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumAccountTypeFieldUpdateOperationsInput.schema.js.map