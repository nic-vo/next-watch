import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ForwardedRef,
	forwardRef,
	PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

const mergeFn = (base: string, className?: string) =>
	twMerge(base, className ? ` ${className}` : '');

export const GlobalMain = ({
	children,
	className,
}: PropsWithChildren & { className?: string }) => (
	<main
		className={mergeFn('pt-32 flex flex-col items-center gap-16', className)}>
		{children}
	</main>
);

export const GlobalH1 = ({
	children,
	className,
}: PropsWithChildren & { className?: string }) => (
	<h1 className={mergeFn('block font-cabin font-black text-8xl', className)}>
		{children}
	</h1>
);

export const GlobalButton = forwardRef(
	(
		{
			children,
			className,
			...attrs
		}: PropsWithChildren &
			DetailedHTMLProps<
				ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>,
		ref: ForwardedRef<HTMLButtonElement>,
	) => (
		<button
			ref={ref}
			className={mergeFn(
				'block outline-none border-2 text-neutral-50 border-neutral-600 hover:bg-neutral-50 hover:text-neutral-950 focus:bg-neutral-50 focus:text-neutral-950 p-2 px-8 rounded-3xl transition-all',
				className,
			)}
			{...attrs}>
			{children}
		</button>
	),
);
