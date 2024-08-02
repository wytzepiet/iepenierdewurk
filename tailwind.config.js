/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			lovelo: ['Lovelo', 'sans-serif']
		},
		fontSize: {
			'8xl': 'min(8rem, 10vw)'
		}
	},
	plugins: []
};
