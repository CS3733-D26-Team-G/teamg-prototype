import * as z from 'zod';
import type { Prisma } from "@repo/db";
import { PositionSchema } from '../enums/Position.schema.ts'

const makeSchema = () => z.object({
  set: PositionSchema.optional()
}).strict();
export const EnumPositionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPositionFieldUpdateOperationsInput>;
export const EnumPositionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
