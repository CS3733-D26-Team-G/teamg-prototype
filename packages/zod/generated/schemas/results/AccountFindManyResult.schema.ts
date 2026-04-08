import * as z from 'zod';
export const AccountFindManyResultSchema = z.object({
  data: z.array(z.object({
  employee: z.unknown(),
  employeeUuid: z.string(),
  username: z.string(),
  password: z.string(),
  type: z.unknown()
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