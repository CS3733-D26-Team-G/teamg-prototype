import * as z from 'zod';

export const ContentStatusSchema = z.enum(['AVAILABLE', 'IN_USE', 'UNAVAILABLE'])

export type ContentStatus = z.infer<typeof ContentStatusSchema>;