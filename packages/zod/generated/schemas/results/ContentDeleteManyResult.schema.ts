import * as z from 'zod';
export const ContentDeleteManyResultSchema = z.object({
  count: z.number()
});