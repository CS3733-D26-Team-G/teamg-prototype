import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema.ts';
import { NestedEnumResourceTypeNullableFilterObjectSchema as NestedEnumResourceTypeNullableFilterObjectSchema } from './NestedEnumResourceTypeNullableFilter.schema.ts'

const nestedenumresourcetypenullablewithaggregatesfilterSchema = z.object({
  equals: ResourceTypeSchema.optional().nullable(),
  in: ResourceTypeSchema.array().optional().nullable(),
  notIn: ResourceTypeSchema.array().optional().nullable(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumResourceTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceTypeNullableWithAggregatesFilter> = nestedenumresourcetypenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceTypeNullableWithAggregatesFilter>;
export const NestedEnumResourceTypeNullableWithAggregatesFilterObjectZodSchema = nestedenumresourcetypenullablewithaggregatesfilterSchema;
