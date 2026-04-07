import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.boolean().optional(),
  title: z.boolean().optional(),
  url: z.boolean().optional(),
  content_owner: z.boolean().optional(),
  for_position: z.boolean().optional(),
  last_modified_time: z.boolean().optional(),
  expiration_time: z.boolean().optional(),
  content_type: z.boolean().optional(),
  status: z.boolean().optional()
}).strict();
export const ContentSelectObjectSchema: z.ZodType<Prisma.ContentSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContentSelect>;
export const ContentSelectObjectZodSchema = makeSchema();
