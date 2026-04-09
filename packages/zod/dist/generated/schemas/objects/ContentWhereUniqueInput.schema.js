import * as z from 'zod';
const makeSchema = () => z.object({
    uuid: z.string().optional()
}).strict();
export const ContentWhereUniqueInputObjectSchema = makeSchema();
export const ContentWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ContentWhereUniqueInput.schema.js.map