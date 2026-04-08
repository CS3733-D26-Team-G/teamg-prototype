import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts';
import { NestedEnumResourceTypeNullableFilterObjectSchema as NestedEnumResourceTypeNullableFilterObjectSchema } from './NestedEnumResourceTypeNullableFilter.schema.ts'

const makeSchema = () => z.object({
  equals: ResourceTypeSchema.optional().nullable(),
  in: ResourceTypeSchema.array().optional().nullable(),
  notIn: ResourceTypeSchema.array().optional().nullable(),
  not: z.union([ResourceTypeSchema, z.lazy(() => NestedEnumResourceTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumResourceTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumResourceTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumResourceTypeNullableFilter>;
export const EnumResourceTypeNullableFilterObjectZodSchema = makeSchema();
