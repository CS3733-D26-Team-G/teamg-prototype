import * as z from 'zod';
import type { Prisma } from '../../../db/generated/prisma/client.ts';
import { PositionSchema } from '../enums/Position.schema.ts'

const nestedenumpositionfilterSchema = z.object({
  equals: PositionSchema.optional(),
  in: PositionSchema.array().optional(),
  notIn: PositionSchema.array().optional(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPositionFilterObjectSchema: z.ZodType<Prisma.NestedEnumPositionFilter> = nestedenumpositionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPositionFilter>;
export const NestedEnumPositionFilterObjectZodSchema = nestedenumpositionfilterSchema;
