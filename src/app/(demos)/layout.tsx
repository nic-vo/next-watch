import Link from 'next/link';
import { PropsWithChildren } from 'react';

const DemoLayout = (props: PropsWithChildren) => (
	<>
		<header className='fixed p-8'>
			<nav>
				<ul>
					<li>
						<Link href='/'>&larr; Back to home</Link>
					</li>
				</ul>
			</nav>
		</header>
		{props.children}
	</>
);

export default DemoLayout;
