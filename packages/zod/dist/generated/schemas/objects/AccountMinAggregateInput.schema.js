import * as z from 'zod';
const makeSchema = () => z.object({
    employeeUuid: z.literal(true).optional(),
    username: z.literal(true).optional(),
    password: z.literal(true).optional(),
    type: z.literal(true).optional()
}).strict();
export const AccountMinAggregateInputObjectSchema = makeSchema();
export const AccountMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountMinAggregateInput.schema.js.map