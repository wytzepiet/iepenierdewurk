/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			lovelo: ['Lovelo', 'sans-serif']
		},
		fontSize: {
			'2xs': 'min(0.75rem, 10vw)',
			xs: 'min(0.875rem, 10vw)',
			sm: 'min(1rem, 10vw)',
			base: 'min(1.125rem, 10vw)',
			lg: 'min(1.25rem, 10vw)',
			xl: 'min(1.5rem, 10vw)',
			'2xl': 'min(1.875rem, 10vw)',
			'3xl': 'min(2.25rem, 10vw)',
			'4xl': 'min(3rem, 10vw)',
			'5xl': 'min(4rem, 10vw)',
			'6xl': 'min(5rem, 10vw)',
			'7xl': 'min(7rem, 10vw)',
			'8xl': 'min(8rem, 10vw)'
		}
	},
	plugins: []
};
