import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { NestedEnumResourceTypeNullableWithAggregatesFilterObjectSchema as NestedEnumResourceTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumResourceTypeNullableWithAggregatesFilter.schema.ts';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema.ts';
import { NestedEnumResourceTypeNullableFilterObjectSchema as NestedEnumResourceTypeNullableFilterObjectSchema } from './NestedEnumResourceTypeNullableFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ResourceTypeSchema.optional().nullable(),
  in: ResourceTypeSchema.array().optional().nullable(),
  notIn: ResourceTypeSchema.array().optional().nullable(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumResourceTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumResourceTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceTypeNullableWithAggregatesFilter>;
export const EnumResourceTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
