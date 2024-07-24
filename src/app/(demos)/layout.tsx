import { GlobalBlockLink } from '@/components/globalUI';
import { PropsWithChildren } from 'react';

const DemoLayout = (props: PropsWithChildren) => (
	<>
		<header className='fixed p-8'>
			<nav>
				<ul>
					<li>
						<GlobalBlockLink href='/'>&larr; Back to home</GlobalBlockLink>
					</li>
				</ul>
			</nav>
		</header>
		{props.children}
	</>
);

export default DemoLayout;
