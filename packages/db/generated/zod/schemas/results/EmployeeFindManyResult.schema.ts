import * as z from 'zod';
export const EmployeeFindManyResultSchema = z.object({
  data: z.array(z.object({
  uuid: z.string(),
  account: z.unknown().optional(),
  accountUsername: z.string(),
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});