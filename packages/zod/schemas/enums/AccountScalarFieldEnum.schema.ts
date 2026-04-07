import * as z from 'zod';

export const AccountScalarFieldEnumSchema = z.enum(['employeeUuid', 'username', 'password', 'type'])

export type AccountScalarFieldEnum = z.infer<typeof AccountScalarFieldEnumSchema>;