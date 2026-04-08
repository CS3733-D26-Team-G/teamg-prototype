import * as z from 'zod';

export const ContentScalarFieldEnumSchema = z.enum(['uuid', 'title', 'url', 'content_owner', 'for_position', 'last_modified_time', 'expiration_time', 'content_type', 'status'])

export type ContentScalarFieldEnum = z.infer<typeof ContentScalarFieldEnumSchema>;