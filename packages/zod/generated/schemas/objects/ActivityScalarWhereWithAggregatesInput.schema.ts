import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema.ts';
import { EnumActionTypeWithAggregatesFilterObjectSchema as EnumActionTypeWithAggregatesFilterObjectSchema } from './EnumActionTypeWithAggregatesFilter.schema.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { EnumResourceTypeNullableWithAggregatesFilterObjectSchema as EnumResourceTypeNullableWithAggregatesFilterObjectSchema } from './EnumResourceTypeNullableWithAggregatesFilter.schema.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { UuidNullableWithAggregatesFilterObjectSchema as UuidNullableWithAggregatesFilterObjectSchema } from './UuidNullableWithAggregatesFilter.schema.ts';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema.ts'

const activityscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  uuid: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  employeeUuid: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => EnumActionTypeWithAggregatesFilterObjectSchema), ActionTypeSchema]).optional(),
  resource: z.union([z.lazy(() => EnumResourceTypeNullableWithAggregatesFilterObjectSchema), ResourceTypeSchema]).optional().nullable(),
  resourceUuid: z.union([z.lazy(() => UuidNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  timestamp: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActivityScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput> = activityscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput>;
export const ActivityScalarWhereWithAggregatesInputObjectZodSchema = activityscalarwherewithaggregatesinputSchema;
