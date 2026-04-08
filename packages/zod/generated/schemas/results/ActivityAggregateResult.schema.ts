import * as z from 'zod';
export const ActivityAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});