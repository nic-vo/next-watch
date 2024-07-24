import { z } from 'zod';

export const NextRequestIPResponseParser = z.object({
	received: z.number().int(),
	ip: z.string().nullable(),
	forwardedHeader: z.string().nullable(),
});

export type NextRequestIPResponseType = z.infer<
	typeof NextRequestIPResponseParser
>;
