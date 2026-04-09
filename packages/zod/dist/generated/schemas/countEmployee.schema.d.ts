import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeCountSchema: z.ZodType<Prisma.EmployeeCountArgs>;
export declare const EmployeeCountZodSchema: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    select: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<true>, z.ZodType<Prisma.EmployeeCountAggregateInputType, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeCountAggregateInputType, unknown>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=countEmployee.schema.d.ts.map