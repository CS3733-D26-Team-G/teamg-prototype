import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.literal(true).optional(),
  title: z.literal(true).optional(),
  url: z.literal(true).optional(),
  content_owner: z.literal(true).optional(),
  for_position: z.literal(true).optional(),
  last_modified_time: z.literal(true).optional(),
  expiration_time: z.literal(true).optional(),
  content_type: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const ContentMaxAggregateInputObjectSchema: z.ZodType<Prisma.ContentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContentMaxAggregateInputType>;
export const ContentMaxAggregateInputObjectZodSchema = makeSchema();
