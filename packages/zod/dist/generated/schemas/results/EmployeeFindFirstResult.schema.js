import * as z from 'zod';
export const EmployeeFindFirstResultSchema = z.nullable(z.object({
    uuid: z.string(),
    account: z.unknown().optional(),
    first_name: z.string(),
    last_name: z.string(),
    date_of_birth: z.date(),
    position: z.unknown(),
    department: z.unknown(),
    start_date: z.date(),
    supervisor: z.string(),
    phone_number: z.string(),
    personal_email: z.string(),
    corporate_email: z.string()
}));
//# sourceMappingURL=EmployeeFindFirstResult.schema.js.map