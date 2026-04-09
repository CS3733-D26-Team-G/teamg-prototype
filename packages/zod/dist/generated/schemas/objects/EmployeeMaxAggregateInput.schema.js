import * as z from 'zod';
const makeSchema = () => z.object({
    uuid: z.literal(true).optional(),
    first_name: z.literal(true).optional(),
    last_name: z.literal(true).optional(),
    date_of_birth: z.literal(true).optional(),
    position: z.literal(true).optional(),
    department: z.literal(true).optional(),
    start_date: z.literal(true).optional(),
    supervisor: z.literal(true).optional(),
    phone_number: z.literal(true).optional(),
    personal_email: z.literal(true).optional(),
    corporate_email: z.literal(true).optional()
}).strict();
export const EmployeeMaxAggregateInputObjectSchema = makeSchema();
export const EmployeeMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeMaxAggregateInput.schema.js.map