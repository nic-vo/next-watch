import { GlobalH1, GlobalMain } from '@/components/globalUI';
import NRIForm from './_components/NRIForm';

const NextRequestIP = () => {
	return (
		<GlobalMain>
			<GlobalH1>NextRequest.ip Issue</GlobalH1>
			<p>
				Basically, Vercel&apos;s{' '}
				<pre className='inline font-bold mx-2'>NextRequest.ip</pre> is not
				always provided even when hosting on Vercel.
			</p>
			<NRIForm />
		</GlobalMain>
	);
};

export default NextRequestIP;
