import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';
import { ResourceTypeSchema } from '../enums/ResourceType.schema.ts'

const makeSchema = () => z.object({
  set: ResourceTypeSchema.optional()
}).strict();
export const NullableEnumResourceTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumResourceTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumResourceTypeFieldUpdateOperationsInput>;
export const NullableEnumResourceTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
