import * as z from 'zod';
export const EmployeeDeleteManyResultSchema = z.object({
  count: z.number()
});