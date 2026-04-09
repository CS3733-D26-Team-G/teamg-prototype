import { z } from "zod";
export const PositionSchema = z.enum([
    "UNDERWRITER",
    "BUSINESS_ANALYST",
    "ADMIN",
]);
export const DepartmentSchema = z.enum([
    "OPERATION_TECHNOLOGY",
    "ACCOUNTING",
]);
export const ContentTypeSchema = z.enum(["REFERENCE", "WORKFLOW"]);
export const ContentStatusSchema = z.enum([
    "AVAILABLE",
    "IN_USE",
    "UNAVAILABLE",
]);
export const AccountTypeSchema = z.enum(["ADMIN", "EMPLOYEE"]);
export const EmployeeCreateInputObjectSchema = z
    .object({
    uuid: z.string().uuid().optional(),
    first_name: z.string(),
    last_name: z.string(),
    date_of_birth: z.coerce.date(),
    position: PositionSchema,
    department: DepartmentSchema,
    start_date: z.coerce.date(),
    supervisor: z.string(),
    phone_number: z.string(),
    personal_email: z.string(),
    corporate_email: z.string(),
})
    .strict();
export const EmployeeCreateInputObjectZodSchema = EmployeeCreateInputObjectSchema;
export const EmployeeInputSchema = EmployeeCreateInputObjectSchema.extend({
    uuid: z.string().uuid(),
}).strict();
export const EmployeePureSchema = EmployeeInputSchema;
export const ContentCreateInputObjectSchema = z
    .object({
    uuid: z.string().uuid().optional(),
    title: z.string(),
    url: z.string(),
    content_owner: z.string(),
    for_position: PositionSchema,
    last_modified_time: z.coerce.date(),
    expiration_time: z.coerce.date(),
    content_type: ContentTypeSchema,
    status: ContentStatusSchema,
})
    .strict();
export const ContentCreateInputObjectZodSchema = ContentCreateInputObjectSchema;
export const ContentInputSchema = ContentCreateInputObjectSchema.extend({
    uuid: z.string().uuid(),
}).strict();
export const ContentPureSchema = ContentInputSchema;
