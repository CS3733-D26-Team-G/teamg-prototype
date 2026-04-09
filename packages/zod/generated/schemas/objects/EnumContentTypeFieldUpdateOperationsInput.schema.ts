import * as z from 'zod';
import type { Prisma } from "@repo/db/client";
import { ContentTypeSchema } from '../enums/ContentType.schema.ts'

const makeSchema = () => z.object({
  set: ContentTypeSchema.optional()
}).strict();
export const EnumContentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput>;
export const EnumContentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
