import * as z from 'zod';
export const EmployeeAggregateResultSchema = z.object({  _count: z.object({
    uuid: z.number(),
    account: z.number(),
    first_name: z.number(),
    last_name: z.number(),
    date_of_birth: z.number(),
    position: z.number(),
    department: z.number(),
    start_date: z.number(),
    supervisor: z.number(),
    phone_number: z.number(),
    personal_email: z.number(),
    corporate_email: z.number()
  }).optional(),
  _min: z.object({
    uuid: z.string().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    date_of_birth: z.date().nullable(),
    start_date: z.date().nullable(),
    supervisor: z.string().nullable(),
    phone_number: z.string().nullable(),
    personal_email: z.string().nullable(),
    corporate_email: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    uuid: z.string().nullable(),
    first_name: z.string().nullable(),
    last_name: z.string().nullable(),
    date_of_birth: z.date().nullable(),
    start_date: z.date().nullable(),
    supervisor: z.string().nullable(),
    phone_number: z.string().nullable(),
    personal_email: z.string().nullable(),
    corporate_email: z.string().nullable()
  }).nullable().optional()});