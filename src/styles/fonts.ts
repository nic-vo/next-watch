import { Cabin, Raleway, Work_Sans } from 'next/font/google';

export const cabin = Cabin({
	weight: 'variable',
	subsets: ['latin'],
	variable: '--font-cabin',
});

export const worksans = Work_Sans({
	weight: 'variable',
	subsets: ['latin'],
	variable: '--font-worksans',
});

export const raleway = Raleway({
	weight: 'variable',
	subsets: ['latin'],
	variable: '--font-rale',
});
