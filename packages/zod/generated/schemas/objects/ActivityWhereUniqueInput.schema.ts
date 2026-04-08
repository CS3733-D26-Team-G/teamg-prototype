import * as z from 'zod';
import type { Prisma } from '../../../../db/generated/prisma/client.ts';


const makeSchema = () => z.object({
  uuid: z.string().optional(),
  employeeUuid: z.string().optional()
}).strict();
export const ActivityWhereUniqueInputObjectSchema: z.ZodType<Prisma.ActivityWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityWhereUniqueInput>;
export const ActivityWhereUniqueInputObjectZodSchema = makeSchema();
