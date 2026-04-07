import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { ContentTypeSchema } from '../enums/ContentType.schema.ts'

const nestedenumcontenttypefilterSchema = z.object({
  equals: ContentTypeSchema.optional(),
  in: ContentTypeSchema.array().optional(),
  notIn: ContentTypeSchema.array().optional(),
  not: z.union([ContentTypeSchema, z.lazy(() => NestedEnumContentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumContentTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumContentTypeFilter> = nestedenumcontenttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumContentTypeFilter>;
export const NestedEnumContentTypeFilterObjectZodSchema = nestedenumcontenttypefilterSchema;
