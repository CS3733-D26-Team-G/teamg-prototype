import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { SortOrderSchema } from '../enums/SortOrder.schema.ts';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema.ts'

const makeSchema = () => z.object({
  uuid: SortOrderSchema.optional(),
  employeeUuid: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  resource: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resourceUuid: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  timestamp: SortOrderSchema.optional()
}).strict();
export const ActivityOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActivityOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityOrderByWithRelationInput>;
export const ActivityOrderByWithRelationInputObjectZodSchema = makeSchema();
