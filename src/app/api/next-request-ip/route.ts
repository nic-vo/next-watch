import { NextRequest } from 'next/server';
import { z } from 'zod';

export const NextRequestIPResponseParser = z.object({
	received: z.number().int(),
	ip: z.string().nullable(),
	forwardedHeader: z.string().nullable(),
});

export type NextRequestIPResponseType = z.infer<
	typeof NextRequestIPResponseParser
>;

export const GET = (req: NextRequest) => {
	const { headers, ip } = req;
	return Response.json(
		{
			received: Date.now(),
			ip: ip ?? null,
			forwardedHeader: headers.get('X-Forwarded-For'),
		},
		{ status: 200 },
	);
};
