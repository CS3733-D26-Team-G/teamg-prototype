import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.string().optional()
}).strict();
export const ContentWhereUniqueInputObjectSchema: z.ZodType<Prisma.ContentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ContentWhereUniqueInput>;
export const ContentWhereUniqueInputObjectZodSchema = makeSchema();
