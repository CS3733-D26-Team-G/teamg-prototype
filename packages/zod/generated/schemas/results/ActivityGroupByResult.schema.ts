import * as z from 'zod';
export const ActivityGroupByResultSchema = z.array(z.object({
  uuid: z.string(),
  employeeUuid: z.string(),
  resourceUuid: z.string(),
  timestamp: z.date(),
  _count: z.object({
    uuid: z.number(),
    employeeUuid: z.number(),
    action: z.number(),
    resource: z.number(),
    resourceUuid: z.number(),
    timestamp: z.number()
  }).optional(),
  _min: z.object({
    uuid: z.string().nullable(),
    employeeUuid: z.string().nullable(),
    resourceUuid: z.string().nullable(),
    timestamp: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    uuid: z.string().nullable(),
    employeeUuid: z.string().nullable(),
    resourceUuid: z.string().nullable(),
    timestamp: z.date().nullable()
  }).nullable().optional()
}));