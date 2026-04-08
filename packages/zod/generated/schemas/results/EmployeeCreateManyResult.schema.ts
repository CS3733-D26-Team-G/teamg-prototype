import * as z from 'zod';
export const EmployeeCreateManyResultSchema = z.object({
  count: z.number()
});