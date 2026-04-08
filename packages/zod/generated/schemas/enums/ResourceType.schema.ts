import * as z from 'zod';

export const ResourceTypeSchema = z.enum(['EMPLOYEE', 'CONTENT'])

export type ResourceType = z.infer<typeof ResourceTypeSchema>;