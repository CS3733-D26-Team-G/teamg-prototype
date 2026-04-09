import * as z from 'zod';
import type { Prisma } from "@repo/db";


const makeSchema = () => z.object({
  uuid: z.string().optional()
}).strict();
export const ContentWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentWhereUniqueInput>;
export const ContentWhereUniqueInputObjectZodSchema = makeSchema();
