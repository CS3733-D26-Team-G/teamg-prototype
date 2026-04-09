import * as z from 'zod';
const makeSchema = () => z.object({
    uuid: z.string().optional()
}).strict();
export const EmployeeWhereUniqueInputObjectSchema = makeSchema();
export const EmployeeWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EmployeeWhereUniqueInput.schema.js.map