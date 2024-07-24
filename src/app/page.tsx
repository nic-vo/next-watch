import { GlobalH1, GlobalMain } from '@/components/globalUI';
import Link from 'next/link';

const Homepage = () => (
	<GlobalMain>
		<hgroup className='flex flex-col'>
			<GlobalH1>Welcome to Next Watch.</GlobalH1>
			<p className='block text-lg font-light max-w-prose'>
				This is a simple project pointing out potential issues with Next.js or
				Vercel.
			</p>
		</hgroup>
		<section>
			<h2 className='font-rale font-bold text-3xl'>Possible Issues</h2>
			<nav>
				<ul>
					<li>
						<section>
							<Link href='/next-request-ip'>
								<h3>NextRequest.ip</h3>
							</Link>
						</section>
					</li>
				</ul>
			</nav>
		</section>
	</GlobalMain>
);

export default Homepage;
