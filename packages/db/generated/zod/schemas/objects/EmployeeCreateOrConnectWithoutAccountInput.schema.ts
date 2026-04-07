import * as z from 'zod';
import type { Prisma } from '../../../prisma/client.ts';
import { EmployeeWhereUniqueInputObjectSchema as EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema.ts';
import { EmployeeCreateWithoutAccountInputObjectSchema as EmployeeCreateWithoutAccountInputObjectSchema } from './EmployeeCreateWithoutAccountInput.schema.ts';
import { EmployeeUncheckedCreateWithoutAccountInputObjectSchema as EmployeeUncheckedCreateWithoutAccountInputObjectSchema } from './EmployeeUncheckedCreateWithoutAccountInput.schema.ts'

const makeSchema = () => z.object({
  where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmployeeCreateWithoutAccountInputObjectSchema), z.lazy(() => EmployeeUncheckedCreateWithoutAccountInputObjectSchema)])
}).strict();
export const EmployeeCreateOrConnectWithoutAccountInputObjectSchema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAccountInput>;
export const EmployeeCreateOrConnectWithoutAccountInputObjectZodSchema = makeSchema();
