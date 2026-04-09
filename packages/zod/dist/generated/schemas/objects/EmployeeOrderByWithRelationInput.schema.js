import * as z from 'zod';
import { SortOrderSchema } from "../enums/SortOrder.schema.js";
import { AccountOrderByWithRelationInputObjectSchema as AccountOrderByWithRelationInputObjectSchema } from "./AccountOrderByWithRelationInput.schema.js";
const makeSchema = () => z.object({
    uuid: SortOrderSchema.optional(),
    first_name: SortOrderSchema.optional(),
    last_name: SortOrderSchema.optional(),
    date_of_birth: SortOrderSchema.optional(),
    position: SortOrderSchema.optional(),
    department: SortOrderSchema.optional(),
    start_date: SortOrderSchema.optional(),
    supervisor: SortOrderSchema.optional(),
    phone_number: SortOrderSchema.optional(),
    personal_email: SortOrderSchema.optional(),
    corporate_email: SortOrderSchema.optional(),
    account: z.lazy(() => AccountOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EmployeeOrderByWithRelationInputObjectSchema = makeSchema();
export const EmployeeOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeOrderByWithRelationInput.schema.js.map