import * as z from 'zod';

export const AccountTypeSchema = z.enum(['ADMIN', 'EMPLOYEE'])

export type AccountType = z.infer<typeof AccountTypeSchema>;