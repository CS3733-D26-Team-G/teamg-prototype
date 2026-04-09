import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { PositionSchema } from '../enums/Position.schema.ts';
import { NestedEnumPositionFilterObjectSchema as NestedEnumPositionFilterObjectSchema } from './NestedEnumPositionFilter.schema.ts'

const makeSchema = () => z.object({
  equals: PositionSchema.optional(),
  in: PositionSchema.array().optional(),
  notIn: PositionSchema.array().optional(),
  not: z.union([PositionSchema, z.lazy(() => NestedEnumPositionFilterObjectSchema)]).optional()
}).strict();
export const EnumPositionFilterObjectSchema: z.ZodType<Prisma.EnumPositionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPositionFilter>;
export const EnumPositionFilterObjectZodSchema = makeSchema();
