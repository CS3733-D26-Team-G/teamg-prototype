import * as z from 'zod';
export const AccountDeleteResultSchema = z.nullable(z.object({
  employee: z.unknown(),
  employeeUuid: z.string(),
  username: z.string(),
  password: z.string(),
  type: z.unknown()
}));