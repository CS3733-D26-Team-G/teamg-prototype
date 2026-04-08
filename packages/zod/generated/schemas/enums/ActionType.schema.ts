import * as z from 'zod';

export const ActionTypeSchema = z.enum(['LOG_IN', 'CREATE_CONTENT', 'EDIT_CONTENT', 'DELETE_CONTENT', 'CREATE_EMPLOYEE', 'EDIT_EMPLOYEE', 'DELETE_EMPLOYEE'])

export type ActionType = z.infer<typeof ActionTypeSchema>;