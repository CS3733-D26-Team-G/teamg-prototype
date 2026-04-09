import * as z from 'zod';
export declare const EmployeeScalarFieldEnumSchema: z.ZodEnum<{
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
}>;
export type EmployeeScalarFieldEnum = z.infer<typeof EmployeeScalarFieldEnumSchema>;
//# sourceMappingURL=EmployeeScalarFieldEnum.schema.d.ts.map