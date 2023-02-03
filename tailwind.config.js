/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			berry: '#A45693',
			blush: '#F1E9EE',
			black: '#000000',
			mauve: '#C092B2',
			'pearly purple': '#AD6EA1',
			white: '#FFFFFF',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
