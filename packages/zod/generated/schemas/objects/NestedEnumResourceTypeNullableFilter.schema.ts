import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts'

const nestedenumresourcetypenullablefilterSchema = z.object({
  equals: ResourceTypeSchema.optional().nullable(),
  in: ResourceTypeSchema.array().optional().nullable(),
  notIn: ResourceTypeSchema.array().optional().nullable(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumResourceTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumResourceTypeNullableFilter> = nestedenumresourcetypenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumResourceTypeNullableFilter>;
export const NestedEnumResourceTypeNullableFilterObjectZodSchema = nestedenumresourcetypenullablefilterSchema;
