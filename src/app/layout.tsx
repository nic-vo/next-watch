import { cabin, raleway, worksans } from '@/styles/fonts';

import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

const RootLayout = (props: PropsWithChildren) => (
	<html>
		<body
			className={`${cabin.variable} ${worksans.variable} ${raleway.variable} bg-stone-900 text-stone-300 font-rale`}>
			{props.children}
		</body>
	</html>
);

export default RootLayout;
