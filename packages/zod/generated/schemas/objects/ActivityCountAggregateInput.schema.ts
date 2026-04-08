import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.literal(true).optional(),
  employeeUuid: z.literal(true).optional(),
  action: z.literal(true).optional(),
  resource: z.literal(true).optional(),
  resourceUuid: z.literal(true).optional(),
  timestamp: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActivityCountAggregateInputObjectSchema: z.ZodType<Prisma.ActivityCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCountAggregateInputType>;
export const ActivityCountAggregateInputObjectZodSchema = makeSchema();
