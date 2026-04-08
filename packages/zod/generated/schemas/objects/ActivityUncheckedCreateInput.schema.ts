import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts'

const makeSchema = () => z.object({
  uuid: z.string().optional(),
  employeeUuid: z.string(),
  action: ActionTypeSchema,
  resource: ResourceTypeSchema.optional().nullable(),
  resourceUuid: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();
export const ActivityUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedCreateInput>;
export const ActivityUncheckedCreateInputObjectZodSchema = makeSchema();
