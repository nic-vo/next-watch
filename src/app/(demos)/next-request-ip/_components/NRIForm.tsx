'use client';

import { PropsWithChildren, useState } from 'react';
import { GlobalButton } from '@/components/globalUI';

import {
	NextRequestIPResponseParser,
	type NextRequestIPResponseType,
} from '@/app/api/next-request-ip/route';

const ResultListSection = ({ children }: PropsWithChildren) => (
	<section className='*:block'>{children}</section>
);

const ResultListHeader = ({ children }: PropsWithChildren) => (
	<h4 className='font-bold font-worksans'>{children}</h4>
);

const NRIForm = () => {
	const [result, setResult] = useState<null | NextRequestIPResponseType>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<null | string>(null);

	const submitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await fetch('/api/next-request-ip');
			setResult(NextRequestIPResponseParser.parse(await response.json()));
		} catch (e: any) {
			setError((e.message as string | undefined) ?? 'Network error');
		}
		setLoading(false);
	};

	const resetHandler = () => {
		setResult(null);
		setError(null);
	};

	return (
		<section className='flex flex-col items-center gap-8 w-full max-w-prose'>
			<h2 className='text-3xl font-bold font-cabin'>Demonstration</h2>
			<form
				onSubmit={submitHandler}
				onReset={resetHandler}
				className='flex gap-4 items-center'>
				<GlobalButton
					type='submit'
					disabled={loading || error !== null}>
					Test
				</GlobalButton>
				<GlobalButton
					type='reset'
					disabled={loading}>
					Reset
				</GlobalButton>
			</form>
			<section
				aria-live='polite'
				className='w-full max-w-prose flex flex-col gap-4'>
				<h3 className='text-xl font-bold font-cabin'>Result</h3>
				{!result ? (
					<p className='text-neutral-600'>Nothing here yet...</p>
				) : (
					<ul className='flex flex-col gap-4'>
						<li>
							<ResultListSection>
								<ResultListHeader>
									<span>IP Address:</span>{' '}
									<span
										className={`font-mono ${result.ip ? 'text-green-400' : 'text-orange-300'}`}>
										{result.ip ?? 'null'}
									</span>
								</ResultListHeader>
								<p>This should not be null if project is hosted on Vercel.</p>
							</ResultListSection>
						</li>
						<li>
							<ResultListSection>
								<ResultListHeader>
									<span>X-Forwarded-For header:</span>{' '}
									<span
										className={`font-mono ${result.forwardedHeader ? 'text-green-400' : 'text-orange-300'}`}>
										{result.forwardedHeader ?? 'null'}
									</span>
								</ResultListHeader>
								<p>
									This should not be null if project is hosted elsewhere besides
									Vercel.
								</p>
							</ResultListSection>
						</li>
						<li>
							<ResultListSection>
								<h4>Request received: </h4>
								<span>{new Date(result.received).toLocaleTimeString()}</span>
							</ResultListSection>
						</li>
					</ul>
				)}
			</section>
		</section>
	);
};

export default NRIForm;
