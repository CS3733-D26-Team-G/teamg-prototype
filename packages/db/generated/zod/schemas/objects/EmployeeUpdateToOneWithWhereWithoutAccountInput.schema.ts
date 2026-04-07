import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { EmployeeWhereInputObjectSchema as EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema.ts';
import { EmployeeUpdateWithoutAccountInputObjectSchema as EmployeeUpdateWithoutAccountInputObjectSchema } from './EmployeeUpdateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedUpdateWithoutAccountInputObjectSchema as EmployeeUncheckedUpdateWithoutAccountInputObjectSchema } from './EmployeeUncheckedUpdateWithoutAccountInput.schema.ts'

const makeSchema = () => z.object({
  where: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EmployeeUpdateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedUpdateWithoutAccountInputObjectSchema)])
}).strict();
export const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeUpdateToOneWithWhereWithoutAccountInput>;
export const EmployeeUpdateToOneWithWhereWithoutAccountInputObjectZodSchema = makeSchema();
