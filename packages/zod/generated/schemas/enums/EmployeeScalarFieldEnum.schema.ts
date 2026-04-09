import * as z from 'zod';

export const EmployeeScalarFieldEnumSchema = z.enum(['uuid', 'first_name', 'last_name', 'date_of_birth', 'position', 'department', 'start_date', 'supervisor', 'phone_number', 'personal_email', 'corporate_email'])

export type EmployeeScalarFieldEnum = z.infer<typeof EmployeeScalarFieldEnumSchema>;