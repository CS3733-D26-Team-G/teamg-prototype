import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema.ts';
import { EnumActionTypeFilterObjectSchema as EnumActionTypeFilterObjectSchema } from './EnumActionTypeFilter.schema.ts';
import { ActionTypeSchema } from '../enums/ActionType.schema.ts';
import { EnumResourceTypeNullableFilterObjectSchema as EnumResourceTypeNullableFilterObjectSchema } from './EnumResourceTypeNullableFilter.schema.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { UuidNullableFilterObjectSchema as UuidNullableFilterObjectSchema } from './UuidNullableFilter.schema.ts';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema.ts'

const activitywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityWhereInputObjectSchema), z.lazy(() => ActivityWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityWhereInputObjectSchema), z.lazy(() => ActivityWhereInputObjectSchema).array()]).optional(),
  uuid: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  employeeUuid: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => EnumActionTypeFilterObjectSchema), ActionTypeSchema]).optional(),
  resource: z.union([z.lazy(() => EnumResourceTypeNullableFilterObjectSchema), ResourceTypeSchema]).optional().nullable(),
  resourceUuid: z.union([z.lazy(() => UuidNullableFilterObjectSchema), z.string()]).optional().nullable(),
  timestamp: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActivityWhereInputObjectSchema: z.ZodType<Prisma.ActivityWhereInput> = activitywhereinputSchema as unknown as z.ZodType<Prisma.ActivityWhereInput>;
export const ActivityWhereInputObjectZodSchema = activitywhereinputSchema;
