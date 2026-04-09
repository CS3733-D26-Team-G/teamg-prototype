import type { Prisma } from '@repo/db/client';
import * as z from 'zod';
export declare const EmployeeFindManySelectSchema: z.ZodType<Prisma.EmployeeSelect>;
export declare const EmployeeFindManySelectZodSchema: z.ZodObject<{
    uuid: z.ZodOptional<z.ZodBoolean>;
    account: z.ZodOptional<z.ZodBoolean>;
    first_name: z.ZodOptional<z.ZodBoolean>;
    last_name: z.ZodOptional<z.ZodBoolean>;
    date_of_birth: z.ZodOptional<z.ZodBoolean>;
    position: z.ZodOptional<z.ZodBoolean>;
    department: z.ZodOptional<z.ZodBoolean>;
    start_date: z.ZodOptional<z.ZodBoolean>;
    supervisor: z.ZodOptional<z.ZodBoolean>;
    phone_number: z.ZodOptional<z.ZodBoolean>;
    personal_email: z.ZodOptional<z.ZodBoolean>;
    corporate_email: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const EmployeeFindManySchema: z.ZodType<Prisma.EmployeeFindManyArgs>;
export declare const EmployeeFindManyZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    include: z.ZodLazy<z.ZodOptional<z.ZodType<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    orderBy: z.ZodOptional<z.ZodUnion<readonly [z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>, z.ZodArray<z.ZodType<Prisma.EmployeeOrderByWithRelationInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeOrderByWithRelationInput, unknown>>>]>>;
    where: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereInput, unknown>>>;
    cursor: z.ZodOptional<z.ZodType<Prisma.EmployeeWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.EmployeeWhereUniqueInput, unknown>>>;
    take: z.ZodOptional<z.ZodNumber>;
    skip: z.ZodOptional<z.ZodNumber>;
    distinct: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        uuid: "uuid";
        first_name: "first_name";
        last_name: "last_name";
        date_of_birth: "date_of_birth";
        position: "position";
        department: "department";
        start_date: "start_date";
        supervisor: "supervisor";
        phone_number: "phone_number";
        personal_email: "personal_email";
        corporate_email: "corporate_email";
    }>, z.ZodArray<z.ZodEnum<{
        uuid: "uuid";
        first_name: "first_name";
        last_name: "last_name";
        date_of_birth: "date_of_birth";
        position: "position";
        department: "department";
        start_date: "start_date";
        supervisor: "supervisor";
        phone_number: "phone_number";
        personal_email: "personal_email";
        corporate_email: "corporate_email";
    }>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=findManyEmployee.schema.d.ts.map