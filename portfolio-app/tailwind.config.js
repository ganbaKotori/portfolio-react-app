/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {},
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'65': '65vh',
			full: '100%'
		}
	},
	plugins: []
};
