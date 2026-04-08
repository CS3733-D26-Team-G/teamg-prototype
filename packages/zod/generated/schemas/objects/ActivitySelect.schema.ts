import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.boolean().optional(),
  employeeUuid: z.boolean().optional(),
  action: z.boolean().optional(),
  resource: z.boolean().optional(),
  resourceUuid: z.boolean().optional(),
  timestamp: z.boolean().optional()
}).strict();
export const ActivitySelectObjectSchema: z.ZodType<Prisma.ActivitySelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySelect>;
export const ActivitySelectObjectZodSchema = makeSchema();
