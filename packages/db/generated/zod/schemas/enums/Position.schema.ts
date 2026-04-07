import * as z from 'zod';

export const PositionSchema = z.enum(['UNDERWRITER', 'BUSINESS_ANALYST', 'ADMIN'])

export type Position = z.infer<typeof PositionSchema>;