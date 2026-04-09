import * as z from 'zod';

export const ContentTypeSchema = z.enum(['REFERENCE', 'WORKFLOW'])

export type ContentType = z.infer<typeof ContentTypeSchema>;