import * as z from 'zod';

export const ActivityScalarFieldEnumSchema = z.enum(['uuid', 'employeeUuid', 'action', 'resource', 'resourceUuid', 'timestamp'])

export type ActivityScalarFieldEnum = z.infer<typeof ActivityScalarFieldEnumSchema>;