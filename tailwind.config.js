/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				cabin: 'var(--font-cabin), sans-serif, ui-sans-serif, system-ui',
				worksans: 'var(--font-worksans), sans-serif, ui-sans-serif, system-ui',
				rale: 'var(--font-rale), serif, ui-serif, system-ui',
			},
		},
	},
	plugins: [],
};
