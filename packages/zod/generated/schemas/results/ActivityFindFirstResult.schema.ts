import * as z from 'zod';
export const ActivityFindFirstResultSchema = z.nullable(z.object({
  uuid: z.string(),
  employeeUuid: z.string(),
  action: z.unknown(),
  resource: z.unknown().optional(),
  resourceUuid: z.string().optional(),
  timestamp: z.date()
}));