import * as z from 'zod';

export const DepartmentSchema = z.enum(['OPERATION_TECHNOLOGY', 'ACCOUNTING'])

export type Department = z.infer<typeof DepartmentSchema>;