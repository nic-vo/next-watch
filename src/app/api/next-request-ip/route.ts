import { NextRequest } from 'next/server';

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
